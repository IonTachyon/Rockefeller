import { createReducer, on } from '@ngrx/store';
import { Ticker } from '../../entities/ticker.entity';
import { readAllTickersSuccess, readTickerSuccess } from './ticker.actions';
import { EntityState, Update, createEntityAdapter } from '@ngrx/entity';

export interface TickerState extends EntityState<Ticker> {}

const adapter = createEntityAdapter<Ticker>();

const initialState = adapter.getInitialState({});

export const tickerReducer = createReducer(
  initialState,
  on(readAllTickersSuccess, (state, props) => {
    const { tickers } = props;
    return adapter.setAll(tickers, state);
  }),
  on(readTickerSuccess, (state, props) => {
    const { ticker } = props;
    adapter.removeOne(ticker.id, state);
    return adapter.addOne(ticker, state);
  })
);
