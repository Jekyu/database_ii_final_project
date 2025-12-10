"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageService = void 0;
const common_1 = require("@nestjs/common");
const extract_meta_data_provider_1 = require("./providers/extract-meta-data.provider");
const storage_space_entity_1 = require("./entities/storage-space.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const status_storage_enum_1 = require("./enum/status-storage.enum");
const rules_upload_const_1 = require("./providers/consts/rules-upload.const");
const storage_plans_entity_1 = require("./entities/storage-plans.entity");
const space_plans_enum_1 = require("./enum/space-plans.enum");
const file_folder_service_1 = require("../file-folder/file-folder.service");
const bucket_s3_service_1 = require("../bucket-s3/bucket-s3.service");
const meta_data_service_1 = require("../meta-data/meta-data.service");
let StorageService = class StorageService {
    extractMetadatProvider;
    storageRepository;
    storagePlanRepository;
    fileFolderService;
    bucketS3Service;
    metadataService;
    constructor(extractMetadatProvider, storageRepository, storagePlanRepository, fileFolderService, bucketS3Service, metadataService) {
        this.extractMetadatProvider = extractMetadatProvider;
        this.storageRepository = storageRepository;
        this.storagePlanRepository = storagePlanRepository;
        this.fileFolderService = fileFolderService;
        this.bucketS3Service = bucketS3Service;
        this.metadataService = metadataService;
    }
    async getSpaceForAccount(idAccount) {
        const space_storage = await this.storageRepository.findOne({
            where: {
                account: { id: idAccount }
            },
            relations: {
                storage_plan: true
            }
        });
        if (!space_storage || space_storage.status === status_storage_enum_1.StatusStorageEnum.BLOCK)
            throw new common_1.BadRequestException('El espacio de almacenamiento esta bloqueado o no existe');
        space_storage.storage_plan.storage_capacity = Number(space_storage.storage_plan.storage_capacity);
        return space_storage;
    }
    async uploadFile(file, idAccount, uploadFileDto) {
        const { id_space } = await this.validators(file, idAccount, uploadFileDto);
        const { key } = await this.bucketS3Service.uploadFile(file);
        const metadata = await this.extractMetadatProvider.extractMetadata(file);
        await this.fileFolderService.createFile({
            id: key,
            name: file.originalname.split('.')[0],
            size: file.size,
            folder_id: uploadFileDto.parent_folder_id
        });
        await this.calculateBalanceStorage(idAccount, file.size);
        await this.metadataService.createFileMetaData({ ...metadata, reference_file_id: key });
        return {
            success: true,
            message: 'Archivo guardado correctamente'
        };
    }
    async calculateBalanceStorage(idAccount, sizeFile) {
        const storage = await this.getSpaceForAccount(idAccount);
        await this.storageRepository.increment({
            id: storage.id
        }, 'ocuppation', sizeFile);
    }
    async validators(file, idAccount, uploadFileDto) {
        const { size, mimetype } = file;
        const folder = await this.fileFolderService.getFolder(uploadFileDto.parent_folder_id, idAccount);
        const { max_file_size, mime_types_allowed } = rules_upload_const_1.RulesUpload;
        const { space_avaible, id_space } = await this.getBalanceStorage(idAccount);
        if (file.size > space_avaible)
            throw new common_1.BadRequestException(`El archivo excede la capacidad de su almacenamiento`);
        if (size > max_file_size)
            throw new common_1.BadRequestException(`El archivo excede el limite maximo de ${max_file_size / 1024 / 1024} mb`);
        if (!mime_types_allowed.includes(mimetype))
            throw new common_1.BadRequestException(`Tipo de archivo no permitido. Archivos permitido <${mime_types_allowed.join(', ')}>`);
        if (!folder)
            throw new common_1.ConflictException('La carpeta contenedora no existe');
        return { id_space };
    }
    async getBalanceStorage(idAccount) {
        const { id, ocuppation, storage_plan: { storage_capacity }, status } = await this.getSpaceForAccount(idAccount);
        const space_avaible = storage_capacity - ocuppation;
        return { space_avaible, storage_capacity, id_space: id, status };
    }
    async createStorageSpace(idAccount) {
        const storage_plan = await this.storagePlanRepository.findOneBy({ name_plan: space_plans_enum_1.SpacePlan.FREE });
        if (!storage_plan)
            throw new common_1.NotFoundException('No se encontraron planes de almacenamiento');
        const storage = this.storageRepository.create({
            storage_plan: storage_plan,
            account: { id: idAccount },
        });
        try {
            await this.storageRepository.save(storage);
        }
        catch (error) {
            throw new common_1.RequestTimeoutException('Error al crear espacio');
        }
    }
    async createFolder(createfolderDto, idAccount) {
        const space = await this.getSpaceForAccount(idAccount);
        return this.fileFolderService.createFolder(createfolderDto, space.id);
    }
    async getStorageUser(userId) {
        const space = await this.getSpaceForAccount(userId);
        const folders = await this.fileFolderService.getAllFolders(space.id);
        return folders;
    }
    async getFolderContent(folderId, userId) {
        const folder = await this.fileFolderService.getFolder(folderId, userId);
        if (!folder)
            throw new common_1.NotFoundException('No se encontro la carpeta');
        return folder;
    }
    async getUrlFile(userId, fileId) {
        const space = await this.getSpaceForAccount(userId);
        const find_file = await this.fileFolderService.findFile(space.id, fileId);
        if (!find_file)
            throw new common_1.NotFoundException('No se encontro el archivo');
        const url_file_presigned = await this.bucketS3Service.getUrlFile(find_file.id);
        return url_file_presigned;
    }
    async getMetadataFile(userId, fileId) {
        const space = await this.getSpaceForAccount(userId);
        const find_file = await this.fileFolderService.findFile(space.id, fileId);
        if (!find_file)
            throw new common_1.NotFoundException('El archivo no existe');
        return this.metadataService.getMetadataFileId(find_file.id);
    }
    async getInfoStorageForAccount(userId) {
        const info_storage = await this.getBalanceStorage(userId);
        const info_files_folders = await this.fileFolderService.getInfoFileFolder(info_storage.id_space);
        return { ...info_storage, ...info_files_folders };
    }
};
exports.StorageService = StorageService;
exports.StorageService = StorageService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(storage_space_entity_1.StorageSpace)),
    __param(2, (0, typeorm_1.InjectRepository)(storage_plans_entity_1.StoragePlan)),
    __metadata("design:paramtypes", [extract_meta_data_provider_1.ExtractMetadataProvider,
        typeorm_2.Repository,
        typeorm_2.Repository,
        file_folder_service_1.FileFolderService,
        bucket_s3_service_1.BucketS3Service,
        meta_data_service_1.MetaDataService])
], StorageService);
//# sourceMappingURL=storage.service.js.map