import { BadRequestException, Injectable, RequestTimeoutException } from '@nestjs/common';
import { IsNull, Like, Not, Repository } from 'typeorm';
import { Folder } from './entities/folder.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFile } from './interfaces/create-file.interface';
import { File } from './entities/file.entity';
import { CreateFolderDto } from 'src/storage/dtos/create-folder.dto';
import { count } from 'console';

@Injectable()
export class FileFolderService {

    constructor(
        @InjectRepository(Folder)
        private readonly folderProvider: Repository<Folder>,

        @InjectRepository(File)
        private readonly fileProvider: Repository<File>
    ) { }

    public async getFolder(idFolder: string, idAccount: string) {
        return this.folderProvider
                .createQueryBuilder('folder')
                .select(['folder.id'])
                .leftJoinAndSelect('folder.files', 'files')
                .leftJoinAndSelect('folder.child', 'child')
                .leftJoin('folder.storage', 'storage')
                .where('storage.account.id = :id_account', {id_account: idAccount})
                .andWhere('folder.id = :id_folder', {id_folder: idFolder})
                .getOne()
    }


    public async getAllFolders(spaceStorageId: string){
        const folders = await this.folderProvider
            .createQueryBuilder('folder')
            .leftJoinAndSelect('folder.files', 'files')
            .leftJoinAndSelect('folder.child', 'child')
            .leftJoin('folder.parent', 'parent')
            .where('folder.storage.id = :spaceStorageId', {spaceStorageId})
            .andWhere('parent.id IS NULL')
            .andWhere('folder.hide = false')
            .getMany()
        return folders
    }

    

    public async createFile(createFile: CreateFile) {
        const file = this.fileProvider.create({
            ...createFile,
            folder: { id: createFile.folder_id }
        })
        try {
            await this.fileProvider.save(file)
        } catch (error) {
            throw new RequestTimeoutException('error en el registro del archivo')
        }
    }

    public async createFolder(createFolderDto: CreateFolderDto, idSpaceStorage: string) {
        const branchIndex = await this.folderProvider.count({
            where: {
                storage: { id: idSpaceStorage }
            }
        })
        const folder = this.folderProvider.create({
            name: createFolderDto.name,
            storage: { id: idSpaceStorage },
            ...(createFolderDto.parent_id && { parent: {id: createFolderDto.parent_id} }),
        })
        try {
            await this.folderProvider.save(folder)
            return {
            success: true,
            message: 'Carpeta creada correctamente'
        }
        } catch (error) {
            throw new RequestTimeoutException('Error en crear la carpeta')
        }
        
    }


    public async findFile(spaceId: string, fileId: string){
        const find_file = await this.fileProvider
                            .createQueryBuilder('file')
                            .select(['file.id'])
                            .leftJoin('file.folder', 'folder')
                            .leftJoin('folder.storage', 'storage')
                            .where('file.id = :fileId', {fileId: fileId})
                            .andWhere('storage.id = :storageId', {storageId: spaceId})
                            .getOne()
        return find_file
    }


    public async getInfoFileFolder(spaceId: string){
        const count_files = await this.fileProvider
                                .createQueryBuilder('file')
                                .leftJoin('file.folder', 'folder')
                                .leftJoin('folder.storage', 'storage')
                                .where('storage.id = :storage_id', {storage_id: spaceId})
                                .getCount()
        const count_folders = await this.folderProvider.count({where: {storage: {id: spaceId}}})
        return {
            count_files: count_files,
            count_folders: count_folders
        }
    }

}


