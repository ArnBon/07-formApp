import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';

const RTX5090 = {
    name: 'RTX 5090',
    price: 2500,
    inStorage: 6
  }
@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})


export class BasicPageComponent implements OnInit{

  constructor(private fb: FormBuilder){}

  /**FORMA 1 */
  /*public myForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    inStorage: new FormControl(0),
  });*/

  /**FORMA 2 */
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  onSave(): void {
    if(this.myForm.invalid)return;
    this.myForm.markAllAsTouched();
    return;
    console.log(this.myForm.value);
  }

  ngOnInit(): void {
    // this.myForm.reset(RTX5090);
  }
}
