import { MetaDataAbstract } from "../meta-data.abstract";

import * as ExifParser from 'exif-parser'

export class JpgeEstrategy implements MetaDataAbstract{
    async getMetaData(file: Express.Multer.File)  {
       const parser = ExifParser.create(file.buffer) 
       const metadata = parser.parse()
       return metadata
    }
    
}