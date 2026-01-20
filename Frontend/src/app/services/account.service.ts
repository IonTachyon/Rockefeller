import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../entities/account.entity';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private apiUrl = 'http://localhost:3000/account';

  constructor(private http: HttpClient) {}

  createAccount(Account: Account): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}`, Account);
  }

  readAllAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.apiUrl}`);
  }
  
  readAccount(AccountID: number): Observable<Account> {
    return this.http.get<Account>(`${this.apiUrl}/${AccountID}`);
  }

  updateAccount(Account: Account): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}`, Account);
  }

  deleteAccount(Account: Account): Observable<String> {
    return this.http.delete<string>(`${this.apiUrl}/${Account.id}`)
  }
}