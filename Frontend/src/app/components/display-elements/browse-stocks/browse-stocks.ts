import { Component } from '@angular/core';
import { Ticker } from '../../../entities/ticker.entity';
import { Trade } from '../../../entities/trade.entity';
import { AgChartOptions } from 'ag-charts-types';

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
  imports: [],
  templateUrl: './browse-stocks.html',
  styleUrl: './browse-stocks.css',
})
export class BrowseStocks {
  tickers: Ticker[]; 
  trades: Trade[];
  current_value: number;
  purchase_value : number;
  percent_gain : number;
  pieChartData: PieChartData[] = [];
  public chartOptions: AgChartOptions;
          
  constructor() {
    this.current_value = 0;
    this.purchase_value = 0;
            this.percent_gain = 0;
      
            this.tickers = [];
            this.trades = [];
      
            this.tickers.push({id: 1, symbol: "NVDA", name: "NVIDIA Inc.", timestamp: 1768672524, price: 184.94, volume: 3943})
            this.tickers.push({id: 2, symbol: "MSFT", name: "Microsoft", timestamp: 1768672524, price: 294.94, volume: 4935})
            this.tickers.push({id: 3, symbol: "AAPL", name: "Apple Inc.", timestamp: 1768672524, price: 384.12, volume: 2343})
            this.tickers.push({id: 4, symbol: "AMZN", name: "Amazon Inc.", timestamp: 1768672524, price: 1.94, volume: 3943})
            this.tickers.push({id: 5, symbol: "GOOG", name: "Alphabet", timestamp: 1768672524, price: 14.4392, volume: 3943})
      
            this.trades.push({id: 1, price: 174.24, volume: 14, timestamp: 1768622524, accountID: 1, tickerID: 1})
            this.trades.push({id: 1, price: 204.17, volume: -7, timestamp: 1768622524, accountID: 1, tickerID: 1})
            this.trades.push({id: 1, price: 185.24, volume: 9, timestamp: 1768622524, accountID: 1, tickerID: 2})
            this.trades.push({id: 1, price: 213.24, volume: -7, timestamp: 1768622524, accountID: 1, tickerID: 2})
      
            this.trades.forEach(trade => {
              let ticker : Ticker | undefined = this.tickers.find((ticker) => ticker.id === trade.tickerID)
              if (ticker) {
                  let pieEntry: PieChartData | undefined = this.pieChartData.find((pie) => pie.tickerID === ticker.id)
                  console.log(pieEntry)
                  if(pieEntry === undefined) {
                    pieEntry = {gain: 0, current_price: ticker.price, tickerID: ticker.id, symbol: ticker.symbol, name: ticker.name, value: ticker.price * trade.volume, average_purchase_price: trade.price, total_purchased: 0, total_sold: 0};
                    if(trade.volume > 0)
                    {
                      pieEntry.total_purchased += trade.volume;
                    }
                    else
                    {
                      pieEntry.total_sold += trade.volume;
                    }
                    this.pieChartData.push(pieEntry);
                  }
                  else
                  {
                    pieEntry.value += ticker.price * trade.volume;
                    if(trade.volume > 0)
                    {
                      let total_value = pieEntry.average_purchase_price * pieEntry.total_purchased;
                      total_value += trade.price * trade.volume;
                      pieEntry.average_purchase_price = total_value / pieEntry.total_purchased;
                      pieEntry.total_purchased += trade.volume;
                    }
                    else
                    {
                      pieEntry.total_sold += trade.volume;
                    }
                  }
                  
                  this.current_value += ticker.price * trade.volume;
              }
            })
      
            this.pieChartData.forEach(pie => {
              this.purchase_value += pie.average_purchase_price * (pie.total_purchased + pie.total_sold);
              pie.gain = Math.round((pie.current_price / pie.average_purchase_price - 1) * 10000) / 100;
              console.log(pie);
            })
            
            this.percent_gain = Math.round((this.current_value / this.purchase_value - 1) * 10000)/100; 
            this.chartOptions = {
                  // Data: Data to be displayed in the chart
                  data: this.pieChartData,
                  // Series: Defines which chart type and data to use
                  series: [{
                    type: 'pie',
                    angleKey: 'value',
                    calloutLabelKey: 'name',
                    sectorLabelKey: 'symbol',
                    sectorLabel: {
                    color: 'white',
                    fontWeight: 'bold',
                    },
                  },],
              };  
        }
}
