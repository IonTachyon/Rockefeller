import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { TickerService } from '../../services/ticker.service';
import { readAllTickers, readAllTickersSuccess, readTicker, readTickerSuccess } from './ticker.actions';
import { pipe } from 'rxjs';

@Injectable()
export class TickerEffects {
  private service: TickerService = inject(TickerService)
  private actions$: Actions = inject(Actions)

  readAllTickers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(readAllTickers.type),
      switchMap(() =>
        this.service.readAllTickers().pipe(map((tickers) => readAllTickersSuccess({ tickers })))
      )
    )
  );
  
  readTicker$ = createEffect(() => 
    this.actions$.pipe(
      ofType(readTicker.type),
      switchMap(({tickerID}) => 
        this.service.readTicker(tickerID).pipe(map((ticker) => readTickerSuccess({ ticker })))
      )
    )  
  )
}
