import { PDFParse } from "pdf-parse"
import { MetaDataAbstract } from "../meta-data.abstract"

export class PdfStrategy implements MetaDataAbstract{
    async getMetaData(file: Express.Multer.File) {
        const pdf_parse = new PDFParse({data: file.buffer})
        const metadata = await pdf_parse.getInfo({parsePageInfo: true})
        return metadata
    }

}