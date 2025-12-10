"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JpgeEstrategy = void 0;
const ExifParser = require("exif-parser");
class JpgeEstrategy {
    async getMetaData(file) {
        const parser = ExifParser.create(file.buffer);
        const metadata = parser.parse();
        return metadata;
    }
}
exports.JpgeEstrategy = JpgeEstrategy;
//# sourceMappingURL=jpge.strategy.js.map