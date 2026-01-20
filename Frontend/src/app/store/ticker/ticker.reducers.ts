import { createReducer, on} from '@ngrx/store'
import { createEntityAdapter, EntityState } from '@ngrx/entity'
import { Ticker } from '../../entities/ticker.entity';
import { readAllTickersSuccess, readTickerSuccess } from './ticker.actions';

export interface TickerState extends EntityState<Ticker> {}

export const adapter = createEntityAdapter<Ticker>({
    selectId: (ticker) => ticker.id,
});

export const initialState: TickerState = adapter.getInitialState();

export const tickerReducer = createReducer(
    initialState,
    on(readTickerSuccess, (state, props) => {
        const { ticker } = props;
        adapter.removeOne(ticker.id, state)
        return adapter.addOne(ticker, state)
    }),
    on(readAllTickersSuccess, (state, props) => {
    const { tickers } = props;
    return adapter.setAll(tickers, state);
  }),
)