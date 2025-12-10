import { Module } from '@nestjs/common';
import { BucketS3Controller } from './bucket-s3.controller';
import { BucketS3Service } from './bucket-s3.service';
import { AwsBucketS3 } from './providers/aws-bucket.provide';

@Module({
  controllers: [BucketS3Controller],
  providers: [BucketS3Service, AwsBucketS3],
  exports: [BucketS3Service, AwsBucketS3]
})
export class BucketS3Module {}
