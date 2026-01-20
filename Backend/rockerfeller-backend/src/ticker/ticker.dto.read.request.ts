import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ReadTickerRequestDTO {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    symbol: string;
}