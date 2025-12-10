"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mp4Strategy = void 0;
const mm = require("music-metadata");
class Mp4Strategy {
    async getMetaData(file) {
        const buffer_video = file.buffer;
        const metadata = await mm.parseBuffer(buffer_video);
        return metadata;
    }
}
exports.Mp4Strategy = Mp4Strategy;
//# sourceMappingURL=mp4.strategy.js.map