import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { TickerService } from '../../services/ticker.service';
import { readAllTickers, readAllTickersSuccess } from './ticker.actions';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private service: TickerService) {}

  readAllTickers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(readAllTickers.type),
      switchMap(() =>
        this.service.readAllTickers().pipe(map((tickers) => readAllTickersSuccess({ tickers })))
      )
    )
  );
}
