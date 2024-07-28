import { createReducer, on } from '@ngrx/store';
import { AuthActions } from './auth.actions';

export interface AuthState {
  token: string | null;
  error: string | null;
}

export const initialState: AuthState = {
  token: localStorage.getItem('token'),
  error: null
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, action) => ({ ...state, token: action.token, error: null })),
  on(AuthActions.loginFailure, (state, action) => ({ ...state, error: action.error })),
  on(AuthActions.logout, state => ({ ...state, token: null, error: null }))
);