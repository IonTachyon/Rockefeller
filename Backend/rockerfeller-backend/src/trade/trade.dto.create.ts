import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTradeDTO {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    price: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    volume: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    timestamp: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    accountID: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    tickerID: number;
}

