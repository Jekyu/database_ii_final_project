import { TypeFile } from "./consts/type-file.const";
export declare class MetaDataFactory {
    createMetaData(file: Express.Multer.File, type_file: keyof typeof TypeFile): void | Promise<any>;
}
