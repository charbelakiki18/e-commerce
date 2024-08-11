import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { selectIsLoggedIn } from '../../auth/state/auth.selector';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AuthActions } from '../../auth/state/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  isLoggedIn: boolean | undefined;

  isLogged() {
    this.store.select(selectIsLoggedIn).pipe(
      map(isLoggedIn => {
        this.isLoggedIn = isLoggedIn;
      })
    ).subscribe();
  }

  ngOnInit() {
    this.isLogged();
  }
  
  constructor(private router: Router, private store: Store){}  

  @Output() messageEvent = new EventEmitter();

  sendData(search: string) {
    this.messageEvent.emit(search)
  }

  logout(){
    this.store.dispatch(AuthActions.logout());
  }

  goToCart(){
    this.router.navigateByUrl("/cart")
  }
}
