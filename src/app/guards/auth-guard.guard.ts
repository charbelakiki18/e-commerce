import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../core/auth/services/auth.service'; 

export const authGuard: CanActivateFn = 
(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router:Router = inject(Router);
  const service:AuthService = inject(AuthService);
  const protectedRoutes: String[] = ['/products'];
  return protectedRoutes.includes(state.url) && service.checkSession() ? true : false
};
