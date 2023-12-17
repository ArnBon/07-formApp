import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent {

  // public myForm2 = new FormGroup({
  //   favoriteGames: new FormArray([])
  // });

    constructor(private fb:FormBuilder){}

    public myForm:FormGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      favoriteGames: this.fb.array([
        ['Metal Gear', Validators.required],
        ['Assasins Creed', Validators.required],
      ])
    });

    onSubmit(): void {
      if(this.myForm.invalid){
        this.myForm.markAllAsTouched();
        return;
      }
      console.log(this.myForm.value)
      this.myForm.reset();
    }

    get favoriteGames(){
      return this.myForm.get('favoriteGames') as FormArray;
    }


    /*lo copio de basic-page.component.ts ambos metodos*/
    isValidField( field: string ): boolean | null {
      return this.myForm.controls[field].errors
        && this.myForm.controls[field].touched;
    }
    getFieldError( field: string ): string | null {

      if ( !this.myForm.controls[field] ) return null;

      const errors = this.myForm.controls[field].errors || {};

      for (const key of Object.keys(errors) ) {
        switch( key ) {
          case 'required':
            return 'Este campo es requerido';

          case 'minlength':
            return `Mínimo ${ errors['minlength'].requiredLength } caracters.`;
        }
      }

      return null;
    }
/**/
    /**este se creo para validar los arrays */
    isValidFieldInArray(formArray: FormArray, index: number){
      return formArray.controls[index].errors
          && formArray.controls[index].touched;
    }


    onDeleteFavorite( index:number ):void {
      this.favoriteGames.removeAt(index);
    }






  }
