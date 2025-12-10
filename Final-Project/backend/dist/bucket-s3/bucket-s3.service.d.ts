import { AwsBucketS3 } from './providers/aws-bucket.provide';
export declare class BucketS3Service {
    private readonly awsBucketS3;
    constructor(awsBucketS3: AwsBucketS3);
    uploadFile(file: Express.Multer.File): Promise<{
        key: string;
    }>;
    getUrlFile(key: string): Promise<string>;
}
