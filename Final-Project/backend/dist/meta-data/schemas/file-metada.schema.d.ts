import { Document, Schema as MongooseSchema } from "mongoose";
export declare class FileMetaData extends Document {
    reference_file_id: string;
    size: number;
    mime_type: string;
    metadata_especific: Record<string, any>;
}
export declare const FileMetaDataSchema: MongooseSchema<FileMetaData, import("mongoose").Model<FileMetaData, any, any, any, Document<unknown, any, FileMetaData, any, {}> & FileMetaData & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FileMetaData, Document<unknown, {}, import("mongoose").FlatRecord<FileMetaData>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<FileMetaData> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
