import { MetaDataAbstract } from "../meta-data.abstract";

export class XlsxStrategy implements MetaDataAbstract{
    getMetaData(file: Express.Multer.File): void {
        throw new Error("Method not implemented.");
    }

}