import { ConfigService } from "@nestjs/config";
export declare class AwsBucketS3 {
    private readonly configService;
    private client;
    private s3_region;
    private s3_bucket_name;
    constructor(configService: ConfigService);
    getPresignedSingedUrl(key: string): Promise<string>;
    uploadFileBucket(file: Express.Multer.File): Promise<{
        key: string;
    }>;
    private generateKeyFile;
}
