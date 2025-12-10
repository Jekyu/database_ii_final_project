import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";

@Schema({strict: false})
export class FileMetaData extends Document {
    @Prop({
        type: String,
        required: true,
        length: 100
    })
    reference_file_id: string

    @Prop({
        type: Number,
        required: true,
    })
    size: number

    @Prop({
        type: String,
        required: true

    })
    mime_type: string

    @Prop({ type: MongooseSchema.Types.Mixed })
    metadata_especific: Record<string, any>
}
export const FileMetaDataSchema = SchemaFactory.createForClass(FileMetaData)