import { createAction, props } from '@ngrx/store';
import { SignInRequest } from '../../../models/authentication';

export const login = createAction(
  "[SignIn Page] User Login",
  props<{user: SignInRequest}>()
);
