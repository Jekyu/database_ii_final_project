import { MetaDataFactory } from "./meta-data.factory";
import { BucketS3Service } from "src/bucket-s3/bucket-s3.service";
import { MetadataBase } from "../interfaces/metada-base.interface";
export declare class ExtractMetadataProvider {
    private readonly metaDataFactory;
    private readonly bucketS3Service;
    constructor(metaDataFactory: MetaDataFactory, bucketS3Service: BucketS3Service);
    extractMetadata(file: Express.Multer.File): Promise<MetadataBase>;
}
