import { IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength } from "class-validator"

export class CreateFolderDto{
    @IsString()
    @MaxLength(40)
    @IsNotEmpty()
    name: string

    @IsUUID()
    @IsOptional()
    parent_id?: string

}