import { MetaDataAbstract } from "../meta-data.abstract";
import * as mm from 'music-metadata';

export class MpgeStrategy implements MetaDataAbstract {
    async getMetaData(file: Express.Multer.File){
        const buffer_video = file.buffer
        const metadata = await mm.parseBuffer(buffer_video)
        return metadata
    }

}