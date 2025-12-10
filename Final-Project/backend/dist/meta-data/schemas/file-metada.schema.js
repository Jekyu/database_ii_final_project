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
exports.FileMetaDataSchema = exports.FileMetaData = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let FileMetaData = class FileMetaData extends mongoose_2.Document {
    reference_file_id;
    size;
    mime_type;
    metadata_especific;
};
exports.FileMetaData = FileMetaData;
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        length: 100
    }),
    __metadata("design:type", String)
], FileMetaData.prototype, "reference_file_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        required: true,
    }),
    __metadata("design:type", Number)
], FileMetaData.prototype, "size", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true
    }),
    __metadata("design:type", String)
], FileMetaData.prototype, "mime_type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.Mixed }),
    __metadata("design:type", Object)
], FileMetaData.prototype, "metadata_especific", void 0);
exports.FileMetaData = FileMetaData = __decorate([
    (0, mongoose_1.Schema)({ strict: false })
], FileMetaData);
exports.FileMetaDataSchema = mongoose_1.SchemaFactory.createForClass(FileMetaData);
//# sourceMappingURL=file-metada.schema.js.map