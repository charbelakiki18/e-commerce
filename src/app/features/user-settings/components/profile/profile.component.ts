import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../../../core/auth/state/auth.actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

  decodedToken: any;

logout() {
  this.store.dispatch(AuthActions.logout());
}
  constructor(private store: Store){}

  ngOnInit(): void {
    this.decodedToken = this.parseJwt(localStorage.getItem('token'))
    console.log(this.decodedToken);
  }

  parseJwt(token: string | null) {
    if(token != null){
      const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
    }
  }
}
