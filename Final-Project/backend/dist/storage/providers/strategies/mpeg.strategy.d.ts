import { MetaDataAbstract } from "../meta-data.abstract";
import * as mm from 'music-metadata';
export declare class MpgeStrategy implements MetaDataAbstract {
    getMetaData(file: Express.Multer.File): Promise<mm.IAudioMetadata>;
}
