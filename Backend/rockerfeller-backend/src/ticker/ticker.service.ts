import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdateResult, DeleteResult } from "typeorm/browser";
import { Ticker } from "./ticker.entity";
import { ReadTickerRequestDTO } from "./ticker.dto.read.request";
import { ReadTickerResponseDTO } from "./ticker.dto.read.response";
import { UpdateTickerDTO} from "./ticker.dto.update";
import { CreateTickerDTO } from "./ticker.dto.create";


@Injectable()
export class TickerService {
    constructor (
        @InjectRepository(Ticker)
        private TickerRepository: Repository<Ticker>,
    ) {}

    async create(newTickerDTO: CreateTickerDTO): Promise<Ticker> {
        var newTicker = new Ticker();
            
        newTicker.price = newTickerDTO.price;
        newTicker.symbol = newTickerDTO.symbol;
        newTicker.timestamp = newTickerDTO.timestamp;
        newTicker.volume = newTickerDTO.volume;
    
        return await this.TickerRepository.save(newTicker);
    }

    async readWithSymbol(readRequestDTO: ReadTickerRequestDTO): Promise<ReadTickerResponseDTO> {
        var ticker: Ticker = await this.TickerRepository.findOneOrFail({
           where: {
               symbol: readRequestDTO.symbol
           } 
        });

        var readResponseDTO : ReadTickerResponseDTO = new ReadTickerResponseDTO();

        readResponseDTO.id = ticker.id;
        readResponseDTO.price = ticker.price;
        readResponseDTO.symbol = ticker.symbol;
        readResponseDTO.timestamp = ticker.timestamp;
        readResponseDTO.volume = ticker.volume;

        return readResponseDTO;
    }

    async readWithID(readID: number): Promise<ReadTickerResponseDTO> {
        var ticker: Ticker = await this.TickerRepository.findOneOrFail({
           where: {
               id: readID
           } 
        });

        var readResponseDTO : ReadTickerResponseDTO = new ReadTickerResponseDTO();

        readResponseDTO.id = ticker.id;
        readResponseDTO.price = ticker.price;
        readResponseDTO.symbol = ticker.symbol;
        readResponseDTO.timestamp = ticker.timestamp;
        readResponseDTO.volume = ticker.volume;

        return readResponseDTO;
    }
    
    async readAll(): Promise<ReadTickerResponseDTO[]> {
        var tickers: Ticker[] = await this.TickerRepository.find();
        return tickers;
    }
    
    async update(updateTickerDTO: UpdateTickerDTO): Promise<UpdateResult>  {
        var tickerInDatabase = await this.TickerRepository.findOneOrFail({
            where: {
                symbol: updateTickerDTO.symbol
            }
        })

        tickerInDatabase.price = updateTickerDTO.price;
        tickerInDatabase.timestamp = updateTickerDTO.timestamp;
        tickerInDatabase.volume = updateTickerDTO.volume;

        return await this.TickerRepository.update(tickerInDatabase.id, tickerInDatabase);
    }   
    
    async delete(deletedTickerID: number): Promise<DeleteResult> {
        return await this.TickerRepository.delete(deletedTickerID);
    }
}