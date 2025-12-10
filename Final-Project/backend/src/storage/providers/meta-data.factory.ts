import { Injectable } from "@nestjs/common";
import { TypeFile } from "./consts/type-file.const";

@Injectable()
export class MetaDataFactory{
    public createMetaData(file: Express.Multer.File, type_file: keyof typeof TypeFile){
        const metadaStrategy = new TypeFile[type_file]
        return metadaStrategy.getMetaData(file)
    }
}