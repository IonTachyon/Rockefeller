import { createAction, props } from "@ngrx/store";
import { Ticker } from "../../entities/ticker.entity";

export const readTicker = createAction(
    'Load Ticker',
)

export const readTickerSuccess = createAction(
    'Load Ticker Success',
    props<{ticker: Ticker}>()
)

export const readAllTickers = createAction(
    'Load All Tickers',
)

export const readAllTickersSuccess = createAction(
    'Load All Tickers Success',
    props<{tickers: Ticker[]}>()
)