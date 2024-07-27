import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service'; 
import { Store } from '@ngrx/store';
import { AppState } from '../state/auth.reducer';
import { map, Observable } from 'rxjs';
import { isLoggedIn } from '../state/auth.selector';

@Injectable({
  providedIn: 'root',
})


export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(isLoggedIn).pipe(
      map((isLogged) => {
        if (!isLogged) {
          this.router.navigate(['/signin']);
          return false;
        }
        return true;
      })
    );
  }
}
