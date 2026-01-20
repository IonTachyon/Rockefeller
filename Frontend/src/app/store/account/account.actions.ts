import { createAction, props } from "@ngrx/store";
import { Account } from "../../entities/account.entity";

export const readUserAccounts = createAction(
    'Load All User Accounts',
)

export const readUserAccountsSuccess = createAction(
    'Load All User Accounts Success',
    props<{accounts: Account[]}>()
)

export const createNewAccount = createAction(
    'Create New Account',
    props<{account: Account}>()
)

export const updateAccount = createAction(
    'Update Account',
    props<{account: Account}>()
)
