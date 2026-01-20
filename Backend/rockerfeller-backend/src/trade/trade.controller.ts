import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { UpdateResult } from 'typeorm/browser';
import { DeleteResult } from 'typeorm/browser';
import { TradeService } from './trade.service';
import { CreateTradeDTO } from './trade.dto.create';
import { UpdateTradeDTO } from './trade.dto.update';
import { ReadTradeDTO } from './trade.dto.read';


@Controller('trade')
export class TradeController {

    constructor(private readonly tradeService: TradeService) {}

    @Post()
    async create(@Body() createTradeDTO: CreateTradeDTO): Promise<string> {
        await this.tradeService.create(createTradeDTO);
        return "Trade successfully created!";
    }

    @Get(':id')
    async read(@Param('id') id: number): Promise<ReadTradeDTO> {
        return this.tradeService.read(id);
    }

    @Get('readAll/:id')
    async readAll(@Param('id') accountID: number): Promise<ReadTradeDTO[]> {
        return this.tradeService.readAll(accountID);
    }
    
    @Put(':id')
    async update(@Body() updateTradeDTO: UpdateTradeDTO): Promise<string> {
        await this.tradeService.update(updateTradeDTO);
        return "Successfully updated Trade!";
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<string> {
        await this.tradeService.delete(id);
        return "Successfully deleted Trade!";
    }
}
