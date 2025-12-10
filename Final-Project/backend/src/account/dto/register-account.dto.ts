
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, ValidateNested } from "class-validator";
import { infoAccountDto } from "./info-account.dto";
import { Type } from "class-transformer";

export class RegisterAccountDto{

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @IsStrongPassword()
    password: string; 
    
    @IsNotEmpty()
    @Type(() => infoAccountDto)
    @ValidateNested()
    info_account: infoAccountDto;
}


