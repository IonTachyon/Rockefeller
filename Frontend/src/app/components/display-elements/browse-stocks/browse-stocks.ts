import { Component, inject } from '@angular/core';
import { Ticker } from '../../../entities/ticker.entity';
import { Trade } from '../../../entities/trade.entity';
import { AgChartOptions } from 'ag-charts-types';
import { TickerService } from '../../../services/ticker.service';
import { Observable } from 'rxjs';
import { RockerfellerState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { readAllTickers } from '../../../store/ticker/ticker.actions';
import { selectAllTickers, selectTickers } from '../../../store/ticker/ticker.selectors';
import { CommonModule } from '@angular/common';

interface PieChartData {
  tickerID: number;
  symbol: string;
  name: string;
  value: number;
  current_price: number;
  average_purchase_price: number;
  total_purchased: number;
  total_sold: number;
  gain: number;
}

@Component({
  selector: 'app-browse-stocks',
  imports: [CommonModule],
  templateUrl: './browse-stocks.html',
  styleUrl: './browse-stocks.css',
})
export class BrowseStocks {
  trades: Trade[];
  tickers: Ticker[];
  $tickerObservable: Observable<Ticker[]>;
  current_value: number;
  purchase_value : number;
  percent_gain : number;
  pieChartData: PieChartData[] = [];
          
  constructor(private store: Store<RockerfellerState>) {
    this.current_value = 0;
    this.purchase_value = 0;
    this.percent_gain = 0;
    this.trades = [];
    this.tickers = [];
    this.store.dispatch(readAllTickers())
    this.$tickerObservable = this.store.select(selectAllTickers);
    this.$tickerObservable.subscribe(tickers => {this.tickers = tickers});
    }
}
