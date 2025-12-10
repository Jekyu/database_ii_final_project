import { MetaDataAbstract } from "../meta-data.abstract";

export class DocxStrategy implements MetaDataAbstract{
    getMetaData(file: Express.Multer.File): void {
        throw new Error("Method not implemented.");
    }

}