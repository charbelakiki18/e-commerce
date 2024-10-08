import {createFeatureSelector, createSelector} from '@ngrx/store';
import { AuthState } from './auth.reducer';


export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectIsLoggedIn = createSelector(
  selectAuthState,
  auth => !!auth.token
);

export const selectError = createSelector(
  selectAuthState,
  (authState: AuthState) => authState.error
);