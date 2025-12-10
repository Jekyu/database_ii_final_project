import { Folder } from "./folder.entity";
export declare class File {
    id: string;
    name: string;
    upload_at: Date;
    delete_at: Date;
    download_last_at?: Date;
    download_counter?: number;
    folder: Folder;
    size: number;
}
