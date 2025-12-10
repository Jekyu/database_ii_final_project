import { StorageSpace } from "./storage-space.entity";
export declare class StoragePlan {
    id: number;
    name_plan: string;
    storage_capacity: number;
    monthly_price: number;
    storage_space: StorageSpace;
}
