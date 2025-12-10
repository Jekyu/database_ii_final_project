import { forwardRef, Module } from '@nestjs/common';
import { StorageController } from './storage.controller';
import { StorageService } from './storage.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StorageSpace } from './entities/storage-space.entity';
import { StoragePlan } from './entities/storage-plans.entity';
import { ExtractMetadataProvider } from './providers/extract-meta-data.provider';
import { AuthModule } from 'src/auth/auth.module';
import { AccountModule } from 'src/account/account.module';
import { FileFolderModule } from 'src/file-folder/file-folder.module';
import { MetaDataFactory } from './providers/meta-data.factory';
import { BucketS3Module } from 'src/bucket-s3/bucket-s3.module';
import { MetaDataModule } from 'src/meta-data/meta-data.module';

@Module({
  controllers: [StorageController],
  providers: [StorageService, ExtractMetadataProvider, MetaDataFactory],
  imports: [MetaDataModule ,BucketS3Module, FileFolderModule,TypeOrmModule.forFeature([StorageSpace, StoragePlan]), forwardRef(() => AccountModule), forwardRef(() => AuthModule)],
  exports: [StorageService, ExtractMetadataProvider]
})
export class StorageModule {}
