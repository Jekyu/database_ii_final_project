"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileFolderModule = void 0;
const common_1 = require("@nestjs/common");
const file_folder_controller_1 = require("./file-folder.controller");
const file_folder_service_1 = require("./file-folder.service");
const typeorm_1 = require("@nestjs/typeorm");
const file_entity_1 = require("./entities/file.entity");
const folder_entity_1 = require("./entities/folder.entity");
let FileFolderModule = class FileFolderModule {
};
exports.FileFolderModule = FileFolderModule;
exports.FileFolderModule = FileFolderModule = __decorate([
    (0, common_1.Module)({
        controllers: [file_folder_controller_1.FileFolderController],
        providers: [file_folder_service_1.FileFolderService],
        imports: [typeorm_1.TypeOrmModule.forFeature([file_entity_1.File, folder_entity_1.Folder])],
        exports: [file_folder_service_1.FileFolderService]
    })
], FileFolderModule);
//# sourceMappingURL=file-folder.module.js.map