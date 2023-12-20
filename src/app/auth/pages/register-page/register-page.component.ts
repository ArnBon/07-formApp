import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider } from 'src/app/shared/validators/validators';
// import * as customValidators from '../../../shared/validators/validators';
import { ValidatorsService } from 'src/app/shared/service/validators.service';
import { EmailValidator } from '../../../shared/validators/email-validator.service';


@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidator
    ){}

  onSubmit(){
    this.myForm.markAllAsTouched();
  }

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.pattern( this.validatorsService.firstNameAndLastnamePattern )  ]],
    // email: ['', [ Validators.required, Validators.pattern( this.validatorsService.emailPattern ) ]],
    // email: ['', [ Validators.required, Validators.pattern( this.validatorsService.emailPattern )], [ new EmailValidator ]],
    email: ['', [ Validators.required, Validators.pattern( this.validatorsService.emailPattern )], [ this.emailValidator ]],
    username: ['', [ Validators.required, this.validatorsService.cantBeStrider ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required ]],
  });

  isValidField(field: string){
    return this.validatorsService.isValidField(this.myForm, field);
  }

}
