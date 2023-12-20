import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider } from 'src/app/shared/validators/validators';
import * as customValidators from '../../../shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  constructor(private fb: FormBuilder){}

  onSubmit(){
    this.myForm.markAllAsTouched();
  }

  public myForm: FormGroup = this.fb.group({
    // name: ['', [Validators.required]],
    name: ['', [Validators.required, Validators.pattern(customValidators.firstNameAndLastnamePattern)]],
    // email: ['', [Validators.required, Validators.email]],
    email: ['', [Validators.required, Validators.pattern(customValidators.emailPattern)]],
    // username: ['', [Validators.required]],
    // username: ['', [Validators.required, cantBeStrider ]],
    username: ['', [Validators.required, customValidators.cantBeStrider ]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  });

  isValidField(field: string){

  }

}
