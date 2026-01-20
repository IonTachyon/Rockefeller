import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trade } from '../entities/trade.entity';

@Injectable({
  providedIn: 'root',
})
export class TradeService {
  private apiUrl = 'http://localhost:3000/trade';

  constructor(private http: HttpClient) {}

  createTrade(trade: Trade): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}`, trade);
  }

  readAllTrades(accountID: number): Observable<Trade[]> {
    return this.http.get<Trade[]>(`${this.apiUrl}/readAll/${accountID}`);
  }
  
  readTrade(tradeID: number): Observable<Trade> {
    return this.http.get<Trade>(`${this.apiUrl}/${tradeID}`);
  }

  updateTrade(trade: Trade): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}`, trade);
  }

  deleteTrade(trade: Trade): Observable<String> {
    return this.http.delete<string>(`${this.apiUrl}/${trade.id}`)
  }
}