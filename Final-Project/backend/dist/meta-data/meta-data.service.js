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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaDataService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const file_metada_schema_1 = require("./schemas/file-metada.schema");
const mongoose_2 = require("@nestjs/mongoose");
let MetaDataService = class MetaDataService {
    fileMetaDataModel;
    constructor(fileMetaDataModel) {
        this.fileMetaDataModel = fileMetaDataModel;
    }
    async createFileMetaData(file_metadata) {
        const metadata = new this.fileMetaDataModel(file_metadata);
        try {
            await metadata.save();
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async getMetadataFileId(metadata_file_id) {
        const metadata_file = await this.fileMetaDataModel.findOne({ reference_file_id: metadata_file_id });
        return metadata_file;
    }
};
exports.MetaDataService = MetaDataService;
exports.MetaDataService = MetaDataService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(file_metada_schema_1.FileMetaData.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], MetaDataService);
//# sourceMappingURL=meta-data.service.js.map