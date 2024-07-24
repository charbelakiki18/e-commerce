import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-admin',
  templateUrl: './sign-up-admin.component.html',
  styleUrl: './sign-up-admin.component.scss'
})
export class SignUpAdminComponent implements OnInit{
  constructor(private fb: FormBuilder, private authService:AuthService, private router:Router) {
  }
 
  get Firstname() {
   return this.signupForm.get('Firstname');
 }
 
 get Lastname() {
   return this.signupForm.get('Lastname');
 }
 
 get Email() {
   return this.signupForm.get('Email');
 }
 
 get Password() {
   return this.signupForm.get('Password');
 }
 
  signupForm = this.fb.group({
   Firstname : ['', Validators.required],
   Lastname : ['', Validators.required],
   Email : ['', [Validators.email, Validators.required]],
   Password : ['', [Validators.required, Validators.minLength(8)]],
   RoleName : ['ADMIN'],
 
 })
    ngOnInit(): void {
   }
 
   onSubmit() {
     if (this.signupForm.valid) {
       console.log('Form Submitted', this.signupForm.value);
       this.authService.signUpAdmin(this.signupForm.value).subscribe(res => {
         console.log(res);
         this.router.navigate(['/products']);
       })
     }
   }

}
