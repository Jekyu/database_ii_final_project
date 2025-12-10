import { BadRequestException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { FileMetaData } from './schemas/file-metada.schema';
import { InjectModel } from '@nestjs/mongoose';
import { MetadataBase } from 'src/storage/interfaces/metada-base.interface';

@Injectable()
export class MetaDataService {
    constructor(
        @InjectModel(FileMetaData.name)
        private readonly fileMetaDataModel: Model<FileMetaData>
    ){}


    async createFileMetaData(file_metadata: MetadataBase){
        const metadata = new this.fileMetaDataModel(file_metadata)
        try {
            await metadata.save()
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async getMetadataFileId(metadata_file_id: string){
        const metadata_file = await this.fileMetaDataModel.findOne({reference_file_id: metadata_file_id})
        return metadata_file
    }
}
