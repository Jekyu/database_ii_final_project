import { Module } from '@nestjs/common';
import { MetaDataController } from './meta-data.controller';
import { MetaDataService } from './meta-data.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FileMetaData, FileMetaDataSchema } from './schemas/file-metada.schema';

@Module({
  controllers: [MetaDataController],
  providers: [MetaDataService],
  imports: [MongooseModule.forFeature([{
    name: FileMetaData.name,
    schema: FileMetaDataSchema
  }])],
  exports: [MetaDataService]
})
export class MetaDataModule {}
