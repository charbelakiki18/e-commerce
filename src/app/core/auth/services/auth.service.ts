import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUpResponse } from '../models/authentication';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signUp(signupForm: any): Observable<SignUpResponse>{
    console.log(signupForm);
    return this.http.post<SignUpResponse>('http://173.249.40.235:5005/api/User/SignUp()',signupForm)
  }
}
