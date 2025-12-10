"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageModule = void 0;
const common_1 = require("@nestjs/common");
const storage_controller_1 = require("./storage.controller");
const storage_service_1 = require("./storage.service");
const typeorm_1 = require("@nestjs/typeorm");
const storage_space_entity_1 = require("./entities/storage-space.entity");
const storage_plans_entity_1 = require("./entities/storage-plans.entity");
const extract_meta_data_provider_1 = require("./providers/extract-meta-data.provider");
const auth_module_1 = require("../auth/auth.module");
const account_module_1 = require("../account/account.module");
const file_folder_module_1 = require("../file-folder/file-folder.module");
const meta_data_factory_1 = require("./providers/meta-data.factory");
const bucket_s3_module_1 = require("../bucket-s3/bucket-s3.module");
const meta_data_module_1 = require("../meta-data/meta-data.module");
let StorageModule = class StorageModule {
};
exports.StorageModule = StorageModule;
exports.StorageModule = StorageModule = __decorate([
    (0, common_1.Module)({
        controllers: [storage_controller_1.StorageController],
        providers: [storage_service_1.StorageService, extract_meta_data_provider_1.ExtractMetadataProvider, meta_data_factory_1.MetaDataFactory],
        imports: [meta_data_module_1.MetaDataModule, bucket_s3_module_1.BucketS3Module, file_folder_module_1.FileFolderModule, typeorm_1.TypeOrmModule.forFeature([storage_space_entity_1.StorageSpace, storage_plans_entity_1.StoragePlan]), (0, common_1.forwardRef)(() => account_module_1.AccountModule), (0, common_1.forwardRef)(() => auth_module_1.AuthModule)],
        exports: [storage_service_1.StorageService, extract_meta_data_provider_1.ExtractMetadataProvider]
    })
], StorageModule);
//# sourceMappingURL=storage.module.js.map