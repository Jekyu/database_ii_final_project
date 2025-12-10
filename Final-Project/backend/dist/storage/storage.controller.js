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
exports.StorageController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const storage_service_1 = require("./storage.service");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const upload_file_dto_1 = require("./dtos/upload-file.dto");
const create_folder_dto_1 = require("./dtos/create-folder.dto");
let StorageController = class StorageController {
    storageService;
    constructor(storageService) {
        this.storageService = storageService;
    }
    async upload(file, req, uploadFileDto) {
        return this.storageService.uploadFile(file, req.payload_user.id, uploadFileDto);
    }
    async createFolder(createFolderDto, req) {
        return this.storageService.createFolder(createFolderDto, req.payload_user.id);
    }
    async getStorageUser(req, user_id) {
        if (user_id !== req.payload_user.id)
            throw new common_1.ConflictException('Uste no tiene acceso a este recurso con sus credenciales');
        return this.storageService.getStorageUser(user_id);
    }
    async getContentFile(req, folder_id) {
        return this.storageService.getFolderContent(folder_id, req.payload_user.id);
    }
    async getUrlFile(req, file_id) {
        return this.storageService.getUrlFile(req.payload_user.id, file_id);
    }
    async getMetadaFile(req, file_id) {
        return this.storageService.getMetadataFile(req.payload_user.id, file_id);
    }
    async getInfoAccount(req) {
        return this.storageService.getInfoStorageForAccount(req.payload_user.id);
    }
};
exports.StorageController = StorageController;
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, upload_file_dto_1.UploadFileDto]),
    __metadata("design:returntype", Promise)
], StorageController.prototype, "upload", null);
__decorate([
    (0, common_1.Post)('folder'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_folder_dto_1.CreateFolderDto, Object]),
    __metadata("design:returntype", Promise)
], StorageController.prototype, "createFolder", null);
__decorate([
    (0, common_1.Get)('/:user_id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('user_id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], StorageController.prototype, "getStorageUser", null);
__decorate([
    (0, common_1.Get)('/folder/:folder_id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('folder_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], StorageController.prototype, "getContentFile", null);
__decorate([
    (0, common_1.Get)('/file/:file_id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('file_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], StorageController.prototype, "getUrlFile", null);
__decorate([
    (0, common_1.Get)('/file/info/:file_id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('file_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], StorageController.prototype, "getMetadaFile", null);
__decorate([
    (0, common_1.Get)(''),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StorageController.prototype, "getInfoAccount", null);
exports.StorageController = StorageController = __decorate([
    (0, common_1.Controller)('storage'),
    __metadata("design:paramtypes", [storage_service_1.StorageService])
], StorageController);
//# sourceMappingURL=storage.controller.js.map