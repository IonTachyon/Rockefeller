import { createEntityAdapter, EntityState } from '@ngrx/entity'
import { User } from '../../entities/user.entity';
import { readUserSuccess, updateUserSuccess} from './user.actions';

export interface UserState extends EntityState<User> {

}

export const adapter = createEntityAdapter<User>({
    selectId: (user) => user.id,
});

export const initialState: UserState = adapter.getInitialState();



