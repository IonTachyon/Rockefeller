import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsObject, IsString } from "class-validator";
import { ReadAccountDTO } from "src/account/account.dto.read";
import { ReadTickerResponseDTO } from "src/ticker/ticker.dto.read.response";

export class ReadTradeDTO {
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
