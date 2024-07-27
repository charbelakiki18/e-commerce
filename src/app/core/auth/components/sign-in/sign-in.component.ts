import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { login } from '../../state/auth.actions';
import { noop } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})

export class SignInComponent implements OnInit{
  success: Boolean = true;
  constructor(private fb: FormBuilder, private authService:AuthService, private router:Router, private store: Store) {
  }
  signInForm = this.fb.group({
   Username : ['', Validators.required],
   Password : ['', Validators.required],
 })

 get Success(){
  return this.success;
 }
 get Password(){
  return this.signInForm.get('Password');
 }

 get Username(){
  return this.signInForm.get('Username');
 }
    ngOnInit(): void {
   }
 
   onSubmit() {
    const val = this.signInForm.value;
    this.authService.signIn(val).pipe(
      
      tap(user => {
        this.store.dispatch(login({user: {Username: val.Username, Password: val.Password}}));
        this.router.navigateByUrl('/products');

    })
  )          .subscribe(
      noop,
      () => {
        this.success = false;
      }
  );
  

}}

