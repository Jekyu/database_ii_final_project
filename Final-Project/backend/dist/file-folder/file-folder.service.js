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
exports.FileFolderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const folder_entity_1 = require("./entities/folder.entity");
const typeorm_2 = require("@nestjs/typeorm");
const file_entity_1 = require("./entities/file.entity");
let FileFolderService = class FileFolderService {
    folderProvider;
    fileProvider;
    constructor(folderProvider, fileProvider) {
        this.folderProvider = folderProvider;
        this.fileProvider = fileProvider;
    }
    async getFolder(idFolder, idAccount) {
        return this.folderProvider
            .createQueryBuilder('folder')
            .select(['folder.id'])
            .leftJoinAndSelect('folder.files', 'files')
            .leftJoinAndSelect('folder.child', 'child')
            .leftJoin('folder.storage', 'storage')
            .where('storage.account.id = :id_account', { id_account: idAccount })
            .andWhere('folder.id = :id_folder', { id_folder: idFolder })
            .getOne();
    }
    async getAllFolders(spaceStorageId) {
        const folders = await this.folderProvider
            .createQueryBuilder('folder')
            .leftJoinAndSelect('folder.files', 'files')
            .leftJoinAndSelect('folder.child', 'child')
            .leftJoin('folder.parent', 'parent')
            .where('folder.storage.id = :spaceStorageId', { spaceStorageId })
            .andWhere('parent.id IS NULL')
            .andWhere('folder.hide = false')
            .getMany();
        return folders;
    }
    async createFile(createFile) {
        const file = this.fileProvider.create({
            ...createFile,
            folder: { id: createFile.folder_id }
        });
        try {
            await this.fileProvider.save(file);
        }
        catch (error) {
            throw new common_1.RequestTimeoutException('error en el registro del archivo');
        }
    }
    async createFolder(createFolderDto, idSpaceStorage) {
        const branchIndex = await this.folderProvider.count({
            where: {
                storage: { id: idSpaceStorage }
            }
        });
        const folder = this.folderProvider.create({
            name: createFolderDto.name,
            storage: { id: idSpaceStorage },
            ...(createFolderDto.parent_id && { parent: { id: createFolderDto.parent_id } }),
        });
        try {
            await this.folderProvider.save(folder);
            return {
                success: true,
                message: 'Carpeta creada correctamente'
            };
        }
        catch (error) {
            throw new common_1.RequestTimeoutException('Error en crear la carpeta');
        }
    }
    async findFile(spaceId, fileId) {
        const find_file = await this.fileProvider
            .createQueryBuilder('file')
            .select(['file.id'])
            .leftJoin('file.folder', 'folder')
            .leftJoin('folder.storage', 'storage')
            .where('file.id = :fileId', { fileId: fileId })
            .andWhere('storage.id = :storageId', { storageId: spaceId })
            .getOne();
        return find_file;
    }
    async getInfoFileFolder(spaceId) {
        const count_files = await this.fileProvider
            .createQueryBuilder('file')
            .leftJoin('file.folder', 'folder')
            .leftJoin('folder.storage', 'storage')
            .where('storage.id = :storage_id', { storage_id: spaceId })
            .getCount();
        const count_folders = await this.folderProvider.count({ where: { storage: { id: spaceId } } });
        return {
            count_files: count_files,
            count_folders: count_folders
        };
    }
};
exports.FileFolderService = FileFolderService;
exports.FileFolderService = FileFolderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(folder_entity_1.Folder)),
    __param(1, (0, typeorm_2.InjectRepository)(file_entity_1.File)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], FileFolderService);
//# sourceMappingURL=file-folder.service.js.map