import { Router, CanActivate} from '@angular/router';
import { Injectable } from '@angular/core';
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