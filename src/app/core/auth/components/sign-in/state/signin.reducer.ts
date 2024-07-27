import { SignInRequest } from '../../../models/authentication';
import { createReducer, on } from '@ngrx/store';
import { login } from './signin.actions';

export interface AuthState {
  user: SignInRequest | undefined
}

export const initialAuthState: AuthState = {
  user: undefined
};

export const authReducer = createReducer(

  initialAuthState,

  on(login, (state, action) => {
      return {
          user: action.user
      }
  }),

);