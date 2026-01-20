import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class AuthLoginDTO {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    e_mail: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    password: string;
}

