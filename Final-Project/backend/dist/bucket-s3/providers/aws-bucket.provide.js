"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsBucketS3 = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const uuid_1 = require("uuid");
let AwsBucketS3 = class AwsBucketS3 {
    configService;
    client;
    s3_region;
    s3_bucket_name;
    constructor(configService) {
        this.configService = configService;
        this.s3_bucket_name = this.configService.get('AWS_S3_BUCKET_NAME') ?? '';
        this.s3_region = this.configService.get('AWS_REGION') ?? '';
        const s3_config = new client_s3_1.S3();
        this.client = new client_s3_1.S3Client({
            region: this.s3_region,
            credentials: {
                accessKeyId: configService.get('AWS_ACCESS_KEY_ID') ?? '',
                secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY') ?? '',
            },
        });
    }
    async getPresignedSingedUrl(key) {
        try {
            const command = new client_s3_1.GetObjectCommand({
                Key: key,
                Bucket: this.s3_bucket_name
            });
            const url = await (0, s3_request_presigner_1.getSignedUrl)(this.client, command, {
                expiresIn: 600
            });
            return url;
        }
        catch (error) {
            throw new common_1.BadRequestException('error en recuperar el archivo');
        }
    }
    async uploadFileBucket(file) {
        try {
            const key = this.generateKeyFile(file);
            const command = new client_s3_1.PutObjectCommand({
                Bucket: this.s3_bucket_name,
                Key: key,
                Body: file.buffer,
                ContentType: file.mimetype
            });
            await this.client.send(command);
            return {
                key: key
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('No se pudo subir el archivo en el bucket');
        }
    }
    generateKeyFile(file) {
        const file_name = file.originalname.trim();
        const timestamp = new Date().getTime().toString().trim();
        return `${file_name}-${timestamp}-${(0, uuid_1.v4)()}`;
    }
};
exports.AwsBucketS3 = AwsBucketS3;
exports.AwsBucketS3 = AwsBucketS3 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AwsBucketS3);
//# sourceMappingURL=aws-bucket.provide.js.map