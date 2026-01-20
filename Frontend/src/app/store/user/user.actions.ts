import { createAction, props } from "@ngrx/store";
import { User } from "../../entities/user.entity";

export const readUser = createAction(
    'Load User',
)

export const readUserSuccess = createAction(
    'Load User Success',
    props<{user: User}>()
)

export const readUserFailure = createAction(
    'Load User Failure',
    props<{error: any}>()
)

export const updateUser = createAction(
    'Update User',
    props<{user: User}>()
)

export const updateUserSuccess = createAction(
    'Update User Success',
    props<{user: User}>()
)

export const updateUserFailure = createAction(
    'Update User Failure',
    props<{error: any}>()
)