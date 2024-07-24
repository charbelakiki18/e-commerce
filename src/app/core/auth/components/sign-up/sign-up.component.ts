import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit{

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
      this.authService.signUp(this.signupForm.value).subscribe(res => {
        console.log(res);
        this.router.navigate(['/products']);
      })
    }
  }
}
