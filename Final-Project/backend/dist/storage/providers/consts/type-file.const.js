"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeFile = void 0;
const docx_strategy_1 = require("../strategies/docx.strategy");
const jpge_strategy_1 = require("../strategies/jpge.strategy");
const mp4_strategy_1 = require("../strategies/mp4.strategy");
const mpeg_strategy_1 = require("../strategies/mpeg.strategy");
const pdf_strategy_1 = require("../strategies/pdf.strategy");
const pptx_strategy_1 = require("../strategies/pptx.strategy");
const xlsx_strategy_1 = require("../strategies/xlsx.strategy");
exports.TypeFile = {
    'application/pdf': pdf_strategy_1.PdfStrategy,
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': docx_strategy_1.DocxStrategy,
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': xlsx_strategy_1.XlsxStrategy,
    'application/vnd.openxmlformats-officedocument.presentationml.presentation': pptx_strategy_1.PptxStrategy,
    'image/jpeg': jpge_strategy_1.JpgeEstrategy,
    'video/mp4': mp4_strategy_1.Mp4Strategy,
    'audio/mpeg': mpeg_strategy_1.MpgeStrategy
};
//# sourceMappingURL=type-file.const.js.map