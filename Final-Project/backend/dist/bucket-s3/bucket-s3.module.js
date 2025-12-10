"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BucketS3Module = void 0;
const common_1 = require("@nestjs/common");
const bucket_s3_controller_1 = require("./bucket-s3.controller");
const bucket_s3_service_1 = require("./bucket-s3.service");
const aws_bucket_provide_1 = require("./providers/aws-bucket.provide");
let BucketS3Module = class BucketS3Module {
};
exports.BucketS3Module = BucketS3Module;
exports.BucketS3Module = BucketS3Module = __decorate([
    (0, common_1.Module)({
        controllers: [bucket_s3_controller_1.BucketS3Controller],
        providers: [bucket_s3_service_1.BucketS3Service, aws_bucket_provide_1.AwsBucketS3],
        exports: [bucket_s3_service_1.BucketS3Service, aws_bucket_provide_1.AwsBucketS3]
    })
], BucketS3Module);
//# sourceMappingURL=bucket-s3.module.js.map