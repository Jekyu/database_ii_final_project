import { Repository } from 'typeorm';
import { Folder } from './entities/folder.entity';
import { CreateFile } from './interfaces/create-file.interface';
import { File } from './entities/file.entity';
import { CreateFolderDto } from 'src/storage/dtos/create-folder.dto';
export declare class FileFolderService {
    private readonly folderProvider;
    private readonly fileProvider;
    constructor(folderProvider: Repository<Folder>, fileProvider: Repository<File>);
    getFolder(idFolder: string, idAccount: string): Promise<Folder | null>;
    getAllFolders(spaceStorageId: string): Promise<Folder[]>;
    createFile(createFile: CreateFile): Promise<void>;
    createFolder(createFolderDto: CreateFolderDto, idSpaceStorage: string): Promise<{
        success: boolean;
        message: string;
    }>;
    findFile(spaceId: string, fileId: string): Promise<File | null>;
    getInfoFileFolder(spaceId: string): Promise<{
        count_files: number;
        count_folders: number;
    }>;
}
