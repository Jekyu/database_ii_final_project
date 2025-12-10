import { StorageService } from './storage.service';
import { PayloadUser } from 'src/auth/interfaces/payload-user.interface';
import { UploadFileDto } from './dtos/upload-file.dto';
import { CreateFolderDto } from './dtos/create-folder.dto';
export declare class StorageController {
    private readonly storageService;
    constructor(storageService: StorageService);
    upload(file: Express.Multer.File, req: PayloadUser, uploadFileDto: UploadFileDto): Promise<{
        success: boolean;
        message: string;
    }>;
    createFolder(createFolderDto: CreateFolderDto, req: PayloadUser): Promise<{
        success: boolean;
        message: string;
    }>;
    getStorageUser(req: PayloadUser, user_id: string): Promise<import("../file-folder/entities/folder.entity").Folder[]>;
    getContentFile(req: PayloadUser, folder_id: string): Promise<import("../file-folder/entities/folder.entity").Folder>;
    getUrlFile(req: PayloadUser, file_id: string): Promise<string>;
    getMetadaFile(req: PayloadUser, file_id: string): Promise<(import("mongoose").Document<unknown, {}, import("../meta-data/schemas/file-metada.schema").FileMetaData, {}, {}> & import("../meta-data/schemas/file-metada.schema").FileMetaData & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null>;
    getInfoAccount(req: PayloadUser): Promise<{
        count_files: number;
        count_folders: number;
        space_avaible: number;
        storage_capacity: number;
        id_space: string;
        status: string;
    }>;
}
