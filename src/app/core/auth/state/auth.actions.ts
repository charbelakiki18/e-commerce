import { createAction, props } from '@ngrx/store';

export const AuthActions = {
  loginRequest: createAction(
    '[Auth] Login Request',
    props<{ username: string; password: string }>()
  ),
  loginSuccess: createAction(
    '[Auth] Login Success',
    props<{ token: string }>()
  ),
  loginFailure: createAction(
    '[Auth] Login Failure',
    props<{ error: string }>()
  ),
  logout: createAction('[Auth] Logout')
};

