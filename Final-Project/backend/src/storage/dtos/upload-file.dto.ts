import { IsNotEmpty, IsString, IsUUID } from "class-validator";


export class UploadFileDto{
    @IsNotEmpty()
    @IsUUID()
    parent_folder_id: string
}