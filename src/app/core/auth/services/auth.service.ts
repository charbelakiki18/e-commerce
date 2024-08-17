import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUpResponse } from '../models/authentication';
import { SignInResponse } from '../models/authentication';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 
  }

  checkSession(): boolean{
    return !!localStorage.getItem('token');
  }
  
  signUpAdmin(signupForm: any): Observable<SignUpResponse>{
    console.log(signupForm);
    return this.http.post<SignUpResponse>(environment.adminSignUpApi ,signupForm)
  }

  signUp(signupForm: any): Observable<SignUpResponse>{
    console.log(signupForm);
    return this.http.post<SignUpResponse>(environment.userSignUpApi,signupForm)
  }

  signIn(credentials: {Username: string, Password: string}): Observable<SignInResponse>{
    console.log("InAuthService " + credentials);
    return this.http.post<SignInResponse>(environment.signInApi, credentials)
  }
}

