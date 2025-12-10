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
exports.File = void 0;
const typeorm_1 = require("typeorm");
const folder_entity_1 = require("./folder.entity");
let File = class File {
    id;
    name;
    upload_at;
    delete_at;
    download_last_at;
    download_counter;
    folder;
    size;
};
exports.File = File;
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        type: 'varchar',
        length: 100
    }),
    __metadata("design:type", String)
], File.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
        length: 50
    }),
    __metadata("design:type", String)
], File.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], File.prototype, "upload_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], File.prototype, "delete_at", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'date',
        nullable: true
    }),
    __metadata("design:type", Date)
], File.prototype, "download_last_at", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'integer',
        nullable: true
    }),
    __metadata("design:type", Number)
], File.prototype, "download_counter", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => folder_entity_1.Folder, (folder) => folder.files),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", folder_entity_1.Folder)
], File.prototype, "folder", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'bigint',
        nullable: false
    }),
    __metadata("design:type", Number)
], File.prototype, "size", void 0);
exports.File = File = __decorate([
    (0, typeorm_1.Entity)()
], File);
//# sourceMappingURL=file.entity.js.map