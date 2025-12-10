export declare class BcryptProvider {
    hashPassword(password: string): Promise<string>;
    comparePassword(password: string, password_save: string): Promise<boolean>;
}
