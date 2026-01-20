import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RockerfellerState } from '../app.state';
import { TickerState } from './ticker.reducers';
import { Ticker } from '../../entities/ticker.entity';

export const selectTickers = createFeatureSelector<TickerState>('tickers');

export const selectAllTickers = createSelector(selectTickers, (state) =>
  Object.values(state.entities)
    .filter((ticker) => ticker != undefined)
    .map((ticker) => ticker as Ticker)
);

