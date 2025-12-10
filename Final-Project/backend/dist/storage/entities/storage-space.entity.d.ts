import { Account } from "src/account/entities/account.entity";
import { Folder } from "src/file-folder/entities/folder.entity";
import { StoragePlan } from "./storage-plans.entity";
export declare class StorageSpace {
    id: string;
    status: string;
    ocuppation: number;
    account: Account;
    create_at: Date;
    storage_plan: StoragePlan;
    folders: Folder[];
}
