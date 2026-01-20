import { createReducer, on } from '@ngrx/store';
import { Account } from '../../entities/account.entity';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { readUserAccountsSuccess, updateAccount } from './account.actions';

export interface AccountState extends EntityState<Account> {}

const adapter = createEntityAdapter<Account>();

const initialState = adapter.getInitialState({});

export const accountReducer = createReducer(
  initialState,
  on(readUserAccountsSuccess, (state, props) => {
    const { accounts } = props;
    return adapter.setAll(accounts, state);
  }),
  on(updateAccount, (state, props) => {
    const { account } = props;
    adapter.removeOne(account.id, state);
    return adapter.addOne(account, state);
  })
);
