import { ExtractMetadataProvider } from './providers/extract-meta-data.provider';
import { StorageSpace } from './entities/storage-space.entity';
import { Repository } from 'typeorm';
import { StoragePlan } from './entities/storage-plans.entity';
import { UploadFileDto } from './dtos/upload-file.dto';
import { FileFolderService } from 'src/file-folder/file-folder.service';
import { BucketS3Service } from 'src/bucket-s3/bucket-s3.service';
import { CreateFolderDto } from './dtos/create-folder.dto';
import { MetaDataService } from 'src/meta-data/meta-data.service';
export declare class StorageService {
    private readonly extractMetadatProvider;
    private readonly storageRepository;
    private readonly storagePlanRepository;
    private readonly fileFolderService;
    private readonly bucketS3Service;
    private readonly metadataService;
    constructor(extractMetadatProvider: ExtractMetadataProvider, storageRepository: Repository<StorageSpace>, storagePlanRepository: Repository<StoragePlan>, fileFolderService: FileFolderService, bucketS3Service: BucketS3Service, metadataService: MetaDataService);
    private getSpaceForAccount;
    uploadFile(file: Express.Multer.File, idAccount: string, uploadFileDto: UploadFileDto): Promise<{
        success: boolean;
        message: string;
    }>;
    private calculateBalanceStorage;
    private validators;
    getBalanceStorage(idAccount: string): Promise<{
        space_avaible: number;
        storage_capacity: number;
        id_space: string;
        status: string;
    }>;
    createStorageSpace(idAccount: string): Promise<void>;
    createFolder(createfolderDto: CreateFolderDto, idAccount: string): Promise<{
        success: boolean;
        message: string;
    }>;
    getStorageUser(userId: string): Promise<import("../file-folder/entities/folder.entity").Folder[]>;
    getFolderContent(folderId: string, userId: string): Promise<import("../file-folder/entities/folder.entity").Folder>;
    getUrlFile(userId: string, fileId: string): Promise<string>;
    getMetadataFile(userId: string, fileId: string): Promise<(import("mongoose").Document<unknown, {}, import("../meta-data/schemas/file-metada.schema").FileMetaData, {}, {}> & import("../meta-data/schemas/file-metada.schema").FileMetaData & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null>;
    getInfoStorageForAccount(userId: string): Promise<{
        count_files: number;
        count_folders: number;
        space_avaible: number;
        storage_capacity: number;
        id_space: string;
        status: string;
    }>;
}
