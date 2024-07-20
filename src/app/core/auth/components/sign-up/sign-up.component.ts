import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit{

  constructor(private fb: FormBuilder, private authService:AuthService) {
 }
 signupForm = this.fb.group({
  Firstname : ['', Validators.required],
  Lastname : ['', Validators.required],
  Email : ['', Validators.required],
  Password : ['', Validators.required],
  RoleName : ['', Validators.required],

})
   ngOnInit(): void {
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form Submitted', this.signupForm.value);
      this.authService.signUp(this.signupForm.value).subscribe(res => {
        console.log(res);
      })
    }
  }
}
