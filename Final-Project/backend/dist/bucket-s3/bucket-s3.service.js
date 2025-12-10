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
exports.BucketS3Service = void 0;
const common_1 = require("@nestjs/common");
const aws_bucket_provide_1 = require("./providers/aws-bucket.provide");
let BucketS3Service = class BucketS3Service {
    awsBucketS3;
    constructor(awsBucketS3) {
        this.awsBucketS3 = awsBucketS3;
    }
    async uploadFile(file) {
        return this.awsBucketS3.uploadFileBucket(file);
    }
    async getUrlFile(key) {
        return this.awsBucketS3.getPresignedSingedUrl(key);
    }
};
exports.BucketS3Service = BucketS3Service;
exports.BucketS3Service = BucketS3Service = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [aws_bucket_provide_1.AwsBucketS3])
], BucketS3Service);
//# sourceMappingURL=bucket-s3.service.js.map