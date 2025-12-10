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
exports.StorageSpace = void 0;
const account_entity_1 = require("../../account/entities/account.entity");
const typeorm_1 = require("typeorm");
const status_storage_enum_1 = require("../enum/status-storage.enum");
const folder_entity_1 = require("../../file-folder/entities/folder.entity");
const storage_plans_entity_1 = require("./storage-plans.entity");
let StorageSpace = class StorageSpace {
    id;
    status;
    ocuppation;
    account;
    create_at;
    storage_plan;
    folders;
};
exports.StorageSpace = StorageSpace;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], StorageSpace.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 30,
        default: status_storage_enum_1.StatusStorageEnum.ACTIVE
    }),
    __metadata("design:type", String)
], StorageSpace.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'bigint',
        default: 0
    }),
    __metadata("design:type", Number)
], StorageSpace.prototype, "ocuppation", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => account_entity_1.Account),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", account_entity_1.Account)
], StorageSpace.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], StorageSpace.prototype, "create_at", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => storage_plans_entity_1.StoragePlan, (storage_plan) => storage_plan.storage_space),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", storage_plans_entity_1.StoragePlan)
], StorageSpace.prototype, "storage_plan", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => folder_entity_1.Folder, (folder) => folder.storage),
    __metadata("design:type", Array)
], StorageSpace.prototype, "folders", void 0);
exports.StorageSpace = StorageSpace = __decorate([
    (0, typeorm_1.Entity)()
], StorageSpace);
//# sourceMappingURL=storage-space.entity.js.map