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
exports.ExtractMetadataProvider = void 0;
const common_1 = require("@nestjs/common");
const meta_data_factory_1 = require("./meta-data.factory");
const bucket_s3_service_1 = require("../../bucket-s3/bucket-s3.service");
let ExtractMetadataProvider = class ExtractMetadataProvider {
    metaDataFactory;
    bucketS3Service;
    constructor(metaDataFactory, bucketS3Service) {
        this.metaDataFactory = metaDataFactory;
        this.bucketS3Service = bucketS3Service;
    }
    async extractMetadata(file) {
        const metadata_especific = await this.metaDataFactory.createMetaData(file, file.mimetype);
        const metadata_base = {
            mime_type: file.mimetype,
            size: file.size,
            reference_file_id: '',
            metadata_especific: metadata_especific
                ? JSON.parse(JSON.stringify(metadata_especific))
                : null
        };
        return metadata_base;
    }
};
exports.ExtractMetadataProvider = ExtractMetadataProvider;
exports.ExtractMetadataProvider = ExtractMetadataProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [meta_data_factory_1.MetaDataFactory,
        bucket_s3_service_1.BucketS3Service])
], ExtractMetadataProvider);
//# sourceMappingURL=extract-meta-data.provider.js.map