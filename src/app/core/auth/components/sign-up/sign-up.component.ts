import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit{

  public success: boolean = true;

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
  RoleName : ['USER'],

})
   ngOnInit(): void {
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form Submitted', this.signupForm.value);
      this.authService.signUp(this.signupForm.value).pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('There was an error during the sign-up process:', error);
          if (error.status === 500) {
            this.success = false;
          }
          return throwError(() => new Error('Something bad happened; please try again later.'));
        })
      ).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/products']);
        }
      });
    }
  }
}
