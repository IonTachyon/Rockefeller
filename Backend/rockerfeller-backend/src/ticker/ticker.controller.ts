import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { UpdateResult } from 'typeorm/browser';
import { DeleteResult } from 'typeorm/browser';
import { TickerService } from './ticker.service';
import { CreateTickerDTO } from './ticker.dto.create';
import { UpdateTickerDTO } from './ticker.dto.update';
import { ReadTickerResponseDTO } from './ticker.dto.read.response';
import { ReadTickerRequestDTO } from './ticker.dto.read.request';

@Controller('ticker')
export class TickerController {

    constructor(private readonly tickerService: TickerService) {}

    @Post('create')
    async create(@Body() createTickerDTO: CreateTickerDTO): Promise<string> {
        await this.tickerService.create(createTickerDTO);
        return "Ticker successfully created!";
    }

    @Post('readWithSymbol')
    async readWithSymbol(@Body() readTickerRequestDTO: ReadTickerRequestDTO): Promise<ReadTickerResponseDTO> {
        return this.tickerService.readWithSymbol(readTickerRequestDTO);
    }

    @Get(':id')
    async read(@Param('id') id: number): Promise<ReadTickerResponseDTO> {
        return this.tickerService.readWithID(id);
    }

    @Get()
    async readAll(): Promise<ReadTickerResponseDTO[]> {
        return this.tickerService.readAll();
    }
    
    @Put(':id')
    async update(@Body() updateTickerDTO: UpdateTickerDTO): Promise<string> {
        await this.tickerService.update(updateTickerDTO);
        return "Succesfully updated Ticker!";
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<string> {
        await this.tickerService.delete(id);
        return "Successfully deleted Ticker!";
    }
}
