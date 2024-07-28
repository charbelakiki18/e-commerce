import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service'; 
import { Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';
import { selectIsLoggedIn } from '../state/auth.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectIsLoggedIn).pipe(
      take(1),
      map(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigate(['/signin']);
          return false;
        }
        return true;
      })
    );
  }
}