import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticker } from '../entities/ticker.entity';

@Injectable({
  providedIn: 'root',
})
export class TickerService {
  private apiUrl = 'http://localhost:3000/api/Ticker';

  constructor(private http: HttpClient) {}

  createTicker(Ticker: Ticker): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}`, Ticker);
  }

  readAllTickers(): Observable<Ticker[]> {
    return this.http.get<Ticker[]>(`${this.apiUrl}`);
  }
  
  readTicker(TickerID: number): Observable<Ticker> {
    return this.http.get<Ticker>(`${this.apiUrl}/${TickerID}`);
  }

  updateTicker(Ticker: Ticker): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}`, Ticker);
  }

  deleteTicker(Ticker: Ticker): Observable<String> {
    return this.http.delete<string>(`${this.apiUrl}/${Ticker.id}`)
  }
}