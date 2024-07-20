import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit{
  success: Boolean = true;
  constructor(private fb: FormBuilder, private authService:AuthService, private router:Router) {
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
    localStorage.clear();
     if (this.signInForm.valid) {
       console.log('Form Submitted', this.signInForm.value);
       this.authService.signIn(this.signInForm.value).subscribe(res => {
          this.success = true;
          console.log(res);
          localStorage.setItem('token',res.Login.AccessToken);
          this.router.navigate(['/products']);
       })
       this.success = false;
      this.router.navigate(['/signin']);
     }
   }

}
