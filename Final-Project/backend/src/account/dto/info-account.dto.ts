import { IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class infoAccountDto {
    @IsString()
    @IsNotEmpty()
    first_name: string;

    @IsString()
    @IsNotEmpty()
    last_name: string;

    @IsPhoneNumber('CO')
    @IsNotEmpty()
    phone: string;
}
