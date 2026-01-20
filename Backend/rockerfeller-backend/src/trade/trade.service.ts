import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdateResult, DeleteResult } from "typeorm/browser";
import { Trade } from "./trade.entity";
import { UpdateTradeDTO} from "./trade.dto.update";
import { CreateTradeDTO } from "./trade.dto.create";
import { Account } from "src/account/account.entity";
import { Ticker } from "src/ticker/ticker.entity";
import { ReadTradeDTO } from "./trade.dto.read";


@Injectable()
export class TradeService {
    constructor (
        @InjectRepository(Trade)
        private TradeRepository: Repository<Trade>,
    ) {}

    async create(newTradeDTO: CreateTradeDTO): Promise<Trade> {
        var newTrade = new Trade();
        var newAccount = new Account();
        var newTicker = new Ticker();

        newTrade.price = newTradeDTO.price;
        newTrade.timestamp = newTradeDTO.timestamp;
        newTrade.volume = newTradeDTO.volume;
        newAccount.id = newTradeDTO.accountID;
        newTicker.id = newTradeDTO.tickerID;
        newTrade.account = newAccount;
        newTrade.ticker = newTicker;
    
        return await this.TradeRepository.save(newTrade);
    }


    async read(readID: number): Promise<ReadTradeDTO> {
        var trade: Trade = await this.TradeRepository.findOneOrFail({
           where: {
               id: readID
           } 
        });
        
        var dto : ReadTradeDTO = new ReadTradeDTO();

        dto.id = trade.id;
        dto.price = trade.price;
        dto.timestamp = trade.timestamp;
        dto.volume = trade.volume;
        dto.accountID = trade.account.id;
        dto.tickerID = trade.ticker.id;

        return dto;
    }
    
    async readAll(accountID: number): Promise<ReadTradeDTO[]> {
        var trades: Trade[] = await this.TradeRepository.find({
            where: {
                account: {
                    id: accountID
                }
            }
        });

        var dtos: ReadTradeDTO[] = [];

        dtos = trades.map(trade => {
            let dto: ReadTradeDTO = new ReadTradeDTO();
            dto.id = trade.id;
            dto.price = trade.price;
            dto.timestamp = trade.timestamp;
            dto.volume = trade.volume;
            dto.accountID = trade.account.id;
            dto.tickerID = trade.ticker.id;
            return dto;
        })
        
        return dtos;
    }
    
    async update(updateTradeDTO: UpdateTradeDTO): Promise<UpdateResult>  {
        var tradeInDatabase = await this.TradeRepository.findOneOrFail({
            where: {
                id: updateTradeDTO.id
            }
        })

        tradeInDatabase.price = updateTradeDTO.price;
        tradeInDatabase.timestamp = updateTradeDTO.timestamp;
        tradeInDatabase.volume = updateTradeDTO.volume;

        return await this.TradeRepository.update(tradeInDatabase.id, tradeInDatabase);
    }   
    
    async delete(deletedTradeID: number): Promise<DeleteResult> {
        return await this.TradeRepository.delete(deletedTradeID);
    }
}