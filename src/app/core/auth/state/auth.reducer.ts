import { createReducer, on } from '@ngrx/store';
import { login } from './auth.actions';
import { SignInRequest } from '../models/authentication';

export interface AuthState {
  user: SignInRequest | undefined
}

export interface AppState {
  auth: AuthState;
  // Add other feature states here as needed
}

export const initialAuthState: AuthState = {
  user: undefined
};

export const authReducer = createReducer(

  initialAuthState,

  on(login, (_state, action) => {
      return {
          user: action.user
      }
  }),

);