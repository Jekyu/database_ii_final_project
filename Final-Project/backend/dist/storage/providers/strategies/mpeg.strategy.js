"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MpgeStrategy = void 0;
const mm = require("music-metadata");
class MpgeStrategy {
    async getMetaData(file) {
        const buffer_video = file.buffer;
        const metadata = await mm.parseBuffer(buffer_video);
        return metadata;
    }
}
exports.MpgeStrategy = MpgeStrategy;
//# sourceMappingURL=mpeg.strategy.js.map