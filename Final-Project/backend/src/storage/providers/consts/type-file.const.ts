import { DocxStrategy } from "../strategies/docx.strategy";
import { JpgeEstrategy } from "../strategies/jpge.strategy";
import { Mp4Strategy } from "../strategies/mp4.strategy";
import { MpgeStrategy } from "../strategies/mpeg.strategy";
import { PdfStrategy } from "../strategies/pdf.strategy";
import { PptxStrategy } from "../strategies/pptx.strategy";
import { XlsxStrategy } from "../strategies/xlsx.strategy";
import { RulesUpload } from "./rules-upload.const";

export const TypeFile = {
    'application/pdf': PdfStrategy,
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': DocxStrategy,
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': XlsxStrategy,
    'application/vnd.openxmlformats-officedocument.presentationml.presentation': PptxStrategy,
    'image/jpeg': JpgeEstrategy,
    'video/mp4': Mp4Strategy,
    'audio/mpeg': MpgeStrategy
} as const
