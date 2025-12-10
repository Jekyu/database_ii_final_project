import { BadRequestException, ConflictException, Inject, Injectable, NotFoundException, RequestTimeoutException } from '@nestjs/common';
import { ExtractMetadataProvider } from './providers/extract-meta-data.provider';
import { StorageSpace } from './entities/storage-space.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StatusStorageEnum } from './enum/status-storage.enum';
import { RulesUpload } from './providers/consts/rules-upload.const';
import { Account } from 'src/account/entities/account.entity';
import { v4 as uuidv4 } from 'uuid'
import { StoragePlan } from './entities/storage-plans.entity';
import { SpacePlan } from './enum/space-plans.enum';
import e from 'express';
import { UploadFileDto } from './dtos/upload-file.dto';
import { FileFolderService } from 'src/file-folder/file-folder.service';
import { BucketS3Service } from 'src/bucket-s3/bucket-s3.service';
import { CreateFolderDto } from './dtos/create-folder.dto';
import { MetaDataService } from 'src/meta-data/meta-data.service';
import { find } from 'rxjs';

@Injectable()
export class StorageService {
    constructor(
        private readonly extractMetadatProvider: ExtractMetadataProvider,
        @InjectRepository(StorageSpace)
        private readonly storageRepository: Repository<StorageSpace>,
        @InjectRepository(StoragePlan)
        private readonly storagePlanRepository: Repository<StoragePlan>,
        private readonly fileFolderService: FileFolderService,
        private readonly bucketS3Service: BucketS3Service,
        private readonly metadataService: MetaDataService
    ) { }

    private async getSpaceForAccount(idAccount: string) {
        const space_storage = await this.storageRepository.findOne({
            where: {
                account: { id: idAccount }
            },
            relations: {
                storage_plan: true
            }
        })
        if (!space_storage || space_storage.status === StatusStorageEnum.BLOCK) throw new BadRequestException('El espacio de almacenamiento esta bloqueado o no existe')
        space_storage.storage_plan.storage_capacity = Number(space_storage.storage_plan.storage_capacity)
        return space_storage
    }


    public async uploadFile(file: Express.Multer.File, idAccount: string, uploadFileDto: UploadFileDto) {
        const { id_space } = await this.validators(file, idAccount, uploadFileDto)
        const {key} = await this.bucketS3Service.uploadFile(file)
        const metadata = await this.extractMetadatProvider.extractMetadata(file)
        await this.fileFolderService.createFile({
            id: key,
            name: file.originalname.split('.')[0],
            size: file.size,
            folder_id: uploadFileDto.parent_folder_id
        })
        await this.calculateBalanceStorage(idAccount, file.size)
        await this.metadataService.createFileMetaData({...metadata, reference_file_id: key})
        return {
            success: true,
            message: 'Archivo guardado correctamente'
        }
    }


    private async calculateBalanceStorage(idAccount: string, sizeFile: number) {
        const storage = await this.getSpaceForAccount(idAccount)
        await this.storageRepository.increment({
            id: storage.id},
            'ocuppation',
            sizeFile
        )
    }

    private async validators(file: Express.Multer.File, idAccount: string, uploadFileDto: UploadFileDto) {
        const { size, mimetype } = file
        const folder = await this.fileFolderService.getFolder(uploadFileDto.parent_folder_id, idAccount)
        const { max_file_size, mime_types_allowed } = RulesUpload
        const { space_avaible, id_space } = await this.getBalanceStorage(idAccount)
        if (file.size > space_avaible) throw new BadRequestException(`El archivo excede la capacidad de su almacenamiento`)
        if (size > max_file_size) throw new BadRequestException(`El archivo excede el limite maximo de ${max_file_size / 1024 / 1024} mb`)
        if (!mime_types_allowed.includes(mimetype)) throw new BadRequestException(`Tipo de archivo no permitido. Archivos permitido <${mime_types_allowed.join(', ')}>`)
        if (!folder) throw new ConflictException('La carpeta contenedora no existe')
        return { id_space }
    }

    public async getBalanceStorage(idAccount: string) {
        const { id, ocuppation, storage_plan: { storage_capacity }, status} = await this.getSpaceForAccount(idAccount)
        const space_avaible = storage_capacity - ocuppation
        return {space_avaible, storage_capacity, id_space: id, status}
    }


    public async createStorageSpace(idAccount: string) {
        const storage_plan = await this.storagePlanRepository.findOneBy({ name_plan: SpacePlan.FREE })
        if (!storage_plan) throw new NotFoundException('No se encontraron planes de almacenamiento')
        const storage = this.storageRepository.create({
            storage_plan: storage_plan,
            account: { id: idAccount },
        })
        try {
            await this.storageRepository.save(storage)
        } catch (error) {
            throw new RequestTimeoutException(`${error} Error al crear espacio`)
        }
    }


    public async createFolder(createfolderDto: CreateFolderDto, idAccount: string){
        const space = await this.getSpaceForAccount(idAccount)
        return this.fileFolderService.createFolder(createfolderDto, space.id)
    }


    public async getStorageUser(userId: string){
        const space = await this.getSpaceForAccount(userId)
        const folders = await this.fileFolderService.getAllFolders(space.id)
        return folders
    }


    public async getFolderContent(folderId: string, userId: string){
        const folder = await this.fileFolderService.getFolder(folderId, userId)
        if(!folder) throw new NotFoundException('No se encontro la carpeta')
        return folder
    }


    public async getUrlFile(userId: string, fileId: string){
        const space = await this.getSpaceForAccount(userId)
        const find_file = await this.fileFolderService.findFile(space.id, fileId)
        if (!find_file) throw new NotFoundException('No se encontro el archivo')
        const url_file_presigned = await this.bucketS3Service.getUrlFile(find_file.id)  
        return url_file_presigned
    }   


    public async getMetadataFile(userId: string, fileId: string){
        const space = await this.getSpaceForAccount(userId)
        const find_file = await this.fileFolderService.findFile(space.id, fileId)
        if(!find_file) throw new NotFoundException('El archivo no existe')
        return this.metadataService.getMetadataFileId(find_file.id)
    }


    public async getInfoStorageForAccount(userId: string){
        const info_storage =  await this.getBalanceStorage(userId)
        const info_files_folders = await this.fileFolderService.getInfoFileFolder(info_storage.id_space)
        return {...info_storage, ...info_files_folders}
    }

}
