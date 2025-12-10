import { InfoAccount } from "./info-account.entity";
export declare class Account {
    id: string;
    email: string;
    password: string;
    status: string;
    created_at: Date;
    info_account: InfoAccount;
}
