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
exports.StoragePlan = void 0;
const typeorm_1 = require("typeorm");
const storage_space_entity_1 = require("./storage-space.entity");
let StoragePlan = class StoragePlan {
    id;
    name_plan;
    storage_capacity;
    monthly_price;
    storage_space;
};
exports.StoragePlan = StoragePlan;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], StoragePlan.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 30,
        nullable: false
    }),
    __metadata("design:type", String)
], StoragePlan.prototype, "name_plan", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'bigint',
        nullable: false
    }),
    __metadata("design:type", Number)
], StoragePlan.prototype, "storage_capacity", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'float',
        nullable: false
    }),
    __metadata("design:type", Number)
], StoragePlan.prototype, "monthly_price", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => storage_space_entity_1.StorageSpace, (storage_space) => storage_space.storage_plan),
    __metadata("design:type", storage_space_entity_1.StorageSpace)
], StoragePlan.prototype, "storage_space", void 0);
exports.StoragePlan = StoragePlan = __decorate([
    (0, typeorm_1.Entity)()
], StoragePlan);
//# sourceMappingURL=storage-plans.entity.js.map