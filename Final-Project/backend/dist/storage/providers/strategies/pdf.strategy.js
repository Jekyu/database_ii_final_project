"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfStrategy = void 0;
const pdf_parse_1 = require("pdf-parse");
class PdfStrategy {
    async getMetaData(file) {
        const pdf_parse = new pdf_parse_1.PDFParse({ data: file.buffer });
        const metadata = await pdf_parse.getInfo({ parsePageInfo: true });
        return metadata;
    }
}
exports.PdfStrategy = PdfStrategy;
//# sourceMappingURL=pdf.strategy.js.map