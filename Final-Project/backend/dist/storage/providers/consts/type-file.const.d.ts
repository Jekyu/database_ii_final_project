import { DocxStrategy } from "../strategies/docx.strategy";
import { JpgeEstrategy } from "../strategies/jpge.strategy";
import { Mp4Strategy } from "../strategies/mp4.strategy";
import { MpgeStrategy } from "../strategies/mpeg.strategy";
import { PdfStrategy } from "../strategies/pdf.strategy";
import { PptxStrategy } from "../strategies/pptx.strategy";
import { XlsxStrategy } from "../strategies/xlsx.strategy";
export declare const TypeFile: {
    readonly 'application/pdf': typeof PdfStrategy;
    readonly 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': typeof DocxStrategy;
    readonly 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': typeof XlsxStrategy;
    readonly 'application/vnd.openxmlformats-officedocument.presentationml.presentation': typeof PptxStrategy;
    readonly 'image/jpeg': typeof JpgeEstrategy;
    readonly 'video/mp4': typeof Mp4Strategy;
    readonly 'audio/mpeg': typeof MpgeStrategy;
};
