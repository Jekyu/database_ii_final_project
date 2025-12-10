import { MetaDataAbstract } from "../meta-data.abstract";
export declare class JpgeEstrategy implements MetaDataAbstract {
    getMetaData(file: Express.Multer.File): Promise<any>;
}
