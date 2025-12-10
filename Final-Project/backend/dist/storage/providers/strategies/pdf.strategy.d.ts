import { MetaDataAbstract } from "../meta-data.abstract";
export declare class PdfStrategy implements MetaDataAbstract {
    getMetaData(file: Express.Multer.File): Promise<import("pdf-parse").InfoResult>;
}
