export interface MetadataBase {
    reference_file_id: string;
    mime_type: string;
    size: number;
    metadata_especific: Record<string, any>;
}
