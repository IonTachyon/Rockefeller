import { Account } from "./account.entity";
import { Ticker } from "./ticker.entity";

export interface Trade {
    id: number;
    price: number;
    volume: number;
    timestamp: number;
    accountID: number;
    tickerID: number;
}