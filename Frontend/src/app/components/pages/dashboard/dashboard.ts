import { Component } from '@angular/core';
import { Page } from '../page/page';
import { Account } from '../../../entities/account.entity';
import { Ticker } from '../../../entities/ticker.entity';
import { Trade } from '../../../entities/trade.entity';
import { Overview } from "../../display-elements/overview/overview";
import { ViewStocks } from "../../display-elements/view-stocks/view-stocks";
import { BrowseStocks } from "../../display-elements/browse-stocks/browse-stocks";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [Page, Overview, ViewStocks, BrowseStocks, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  selected_account: number;
  selected_option: number;
  accounts: Account[];
  tickers: Ticker[];
  trades: Trade[];

    constructor() {
      this.accounts = [];
      this.tickers = [];
      this.trades = [];

      this.accounts.push({id: 1, name: "My First Account", description: "First test account!", balance: 148.34})
      this.accounts.push({id: 2, name: "Big Tech", description: "Account focused on big tech investments.", balance: 1493.342});

      this.tickers.push({id: 1, symbol: "NVDA", name: "NVIDIA Inc.", timestamp: 1768672524, price: 184.94, volume: 3943})
      this.tickers.push({id: 2, symbol: "MSFT", name: "Microsoft", timestamp: 1768672524, price: 294.94, volume: 4935})
      this.tickers.push({id: 3, symbol: "AAPL", name: "Apple Inc.", timestamp: 1768672524, price: 384.12, volume: 2343})
      this.tickers.push({id: 4, symbol: "AMZN", name: "Amazon Inc.", timestamp: 1768672524, price: 1.94, volume: 3943})
      this.tickers.push({id: 5, symbol: "GOOG", name: "Alphabet", timestamp: 1768672524, price: 14.4392, volume: 3943})

      this.trades.push({id: 1, price: 174.24, volume: 14, timestamp: 1768622524, accountID: 1, tickerID: 1})
      this.trades.push({id: 1, price: 204.17, volume: -7, timestamp: 1768622524, accountID: 1, tickerID: 1})
      this.trades.push({id: 1, price: 185.24, volume: 9, timestamp: 1768622524, accountID: 1, tickerID: 1})
      this.trades.push({id: 1, price: 213.24, volume: -13, timestamp: 1768622524, accountID: 1, tickerID: 1})
      
      this.selected_account = this.accounts[0].id;
      this.selected_option = 0;
    }
  
    select_option(id: number) {
      this.selected_option = id;
    }

    select_account(id: number) {
      this.selected_account = id;
    }
}
