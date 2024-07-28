import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUpResponse } from '../models/authentication';
import { SignInResponse } from '../models/authentication';

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
    return this.http.post<SignUpResponse>('http://173.249.40.235:5005/api/User/CreateAdminUser()',signupForm)
  }

  signUp(signupForm: any): Observable<SignUpResponse>{
    console.log(signupForm);
    return this.http.post<SignUpResponse>('http://173.249.40.235:5005/api/User/SignUp()',signupForm)
  }

  signIn(credentials: {Username: string, Password: string}): Observable<SignInResponse>{
    console.log("InAuthService " + credentials);
    return this.http.post<SignInResponse>('http://173.249.40.235:5005/api/User/Login()', credentials)
  }
}

