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
exports.Folder = void 0;
const typeorm_1 = require("typeorm");
const file_entity_1 = require("./file.entity");
const storage_space_entity_1 = require("../../storage/entities/storage-space.entity");
let Folder = class Folder {
    id;
    name;
    create_at;
    update_at;
    delete_at;
    parent;
    child;
    storage;
    hide;
    files;
};
exports.Folder = Folder;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Folder.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 40,
        nullable: false
    }),
    __metadata("design:type", String)
], Folder.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Folder.prototype, "create_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Folder.prototype, "update_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Folder.prototype, "delete_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Folder, (folder) => folder.child),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Folder)
], Folder.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Folder, (folder) => folder.parent),
    __metadata("design:type", Array)
], Folder.prototype, "child", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => storage_space_entity_1.StorageSpace, (storage) => storage.folders),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", storage_space_entity_1.StorageSpace)
], Folder.prototype, "storage", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'boolean',
        default: false
    }),
    __metadata("design:type", Boolean)
], Folder.prototype, "hide", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => file_entity_1.File, (file) => file.folder),
    __metadata("design:type", Array)
], Folder.prototype, "files", void 0);
exports.Folder = Folder = __decorate([
    (0, typeorm_1.Entity)()
], Folder);
//# sourceMappingURL=folder.entity.js.map