import { createAction, props } from "@ngrx/store";
import { Ticker } from "../../entities/ticker.entity";

export const readTicker = createAction(
    'Load Ticker',
)

export const readTickerSuccess = createAction(
    'Load Ticker Success',
    props<{ticker: Ticker}>()
)

export const readTickerFailure = createAction(
    'Load Ticker Failure',
    props<{error: any}>()
)

export const readAllTickers = createAction(
    'Load All Tickers',
)

export const readAllTickersSuccess = createAction(
    'Load All Tickers Success',
    props<{tickers: Ticker[]}>()
)

export const readAllTickersFailure = createAction(
    'Load All Tickers Failure',
    props<{error: any}>()
)
