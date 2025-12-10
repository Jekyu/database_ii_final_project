import { File } from "./file.entity";
import { StorageSpace } from "src/storage/entities/storage-space.entity";
export declare class Folder {
    id: string;
    name: string;
    create_at: Date;
    update_at: Date;
    delete_at: Date;
    parent: Folder;
    child: Folder[];
    storage: StorageSpace;
    hide: Boolean;
    files: File[];
}
