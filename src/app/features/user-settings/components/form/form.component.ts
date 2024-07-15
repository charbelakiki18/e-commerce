import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  constructor(private fb: FormBuilder){
  }

  profileForm = this.fb.group({
    firstName : ['', Validators.required],

  })

  onSubmit(){
    console.warn(this.profileForm.value)
  }
}
