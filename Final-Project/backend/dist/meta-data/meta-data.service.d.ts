import { Model } from 'mongoose';
import { FileMetaData } from './schemas/file-metada.schema';
import { MetadataBase } from 'src/storage/interfaces/metada-base.interface';
export declare class MetaDataService {
    private readonly fileMetaDataModel;
    constructor(fileMetaDataModel: Model<FileMetaData>);
    createFileMetaData(file_metadata: MetadataBase): Promise<void>;
    getMetadataFileId(metadata_file_id: string): Promise<(import("mongoose").Document<unknown, {}, FileMetaData, {}, {}> & FileMetaData & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null>;
}
