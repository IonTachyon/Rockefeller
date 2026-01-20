import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateTradeDTO {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    id: number;

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