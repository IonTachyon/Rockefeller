import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTickerDTO {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    symbol: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    timestamp: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    price: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    volume: number;
}

