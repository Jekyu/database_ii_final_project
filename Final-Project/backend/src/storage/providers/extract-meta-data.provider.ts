import { BadRequestException, ConflictException, Injectable } from "@nestjs/common";
import { RulesUpload } from "./consts/rules-upload.const";
import { Account } from "src/account/entities/account.entity";
import { StorageSpace } from "../entities/storage-space.entity";
import { UploadFileDto } from "../dtos/upload-file.dto";
import { FileFolderService } from "src/file-folder/file-folder.service";
import { MetaDataFactory } from "./meta-data.factory";
import { Console } from "console";
import { TypeFile } from "./consts/type-file.const";
import { BucketS3Service } from "src/bucket-s3/bucket-s3.service";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { MetadataBase } from "../interfaces/metada-base.interface";

@Injectable()
export class ExtractMetadataProvider{

    constructor(
        private readonly metaDataFactory: MetaDataFactory,
        private readonly bucketS3Service: BucketS3Service
    ){}


    public async extractMetadata(file: Express.Multer.File){
        const metadata_especific = await this.metaDataFactory.createMetaData(file, file.mimetype as keyof typeof TypeFile)
        const metadata_base: MetadataBase = {
            mime_type: file.mimetype ,
            size: file.size,
            reference_file_id: '',
            metadata_especific: metadata_especific 
            ? JSON.parse(JSON.stringify(metadata_especific))
            : null
            
        }
        return metadata_base
    }
}