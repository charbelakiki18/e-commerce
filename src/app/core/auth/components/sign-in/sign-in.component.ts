import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AuthActions } from '../../state/auth.actions';
import { Observable } from 'rxjs';
import { selectError } from '../../state/auth.selector';
import { AuthState } from '../../state/auth.reducer';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})

export class SignInComponent implements OnInit{
  error$ :any
  success: Boolean = true;
  constructor(private fb: FormBuilder, private authService:AuthService, private router:Router, private store: Store<AuthState>) {
    this.error$ = this.store.pipe(select(selectError));
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
      this.error$.subscribe((error: any) => {
        this.success = !error; // Update success based on error presence
      });
   }
 
   onSubmit(): void {
    if (this.signInForm.valid) {
      const credentials = {
        username: this.signInForm.value.Username || '',
        password: this.signInForm.value.Password || ''
      };
      this.store.dispatch(AuthActions.loginRequest(credentials));
    }
  }}