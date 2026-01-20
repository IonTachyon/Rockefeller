import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class AuthRegisterDTO {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    username: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    full_name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    e_mail: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    password: string;
}

