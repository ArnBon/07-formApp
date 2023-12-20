import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, FormGroup, AbstractControl } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {

  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  public cantBeStrider = ( control: FormControl ): ValidationErrors | null => {

    const value: string = control.value.trim().toLowerCase();

    if (value === 'strider') {
      return {
        noStrider: true,
      }
    }

    return null;
  }

  public isValidField( form: FormGroup, field: string ) {
    return form.controls[field].errors && form.controls[field].touched;
  }

// clase 257
  public isFieldOneEqualFieldTwo( field1: string, field2: string ) {

    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      const fieldValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;

      if ( fieldValue1 !== fieldValue2 ) {
        formGroup.get(field2)?.setErrors({ notEqual: true });
        return { notEqual: true }
      }

      formGroup.get(field2)?.setErrors(null);
      return null;
    }

  }

  /**
   * #### **Explicación de la Función de Validación isFieldOneEqualFieldTwo**

1. **Parámetros de Entrada**
   - La función `isFieldOneEqualFieldTwo` toma dos parámetros de tipo `string` llamados `field1` y `field2`, que representan los nombres de los campos que se van a comparar.

2. **Retorno de una Función de Validación**
   - La función principal devuelve una función anónima que toma un parámetro `formGroup` de tipo `AbstractControl` (presumiblemente un FormGroup) y devuelve un objeto de tipo `ValidationErrors` o `null`.

3. **Obtención de Valores de los Campos**
   - Se obtienen los valores de los campos especificados (`field1` y `field2`) del `formGroup` utilizando `formGroup.get(field1)?.value` y `formGroup.get(field2)?.value`.

4. **Comparación de Valores**
   - Se compara si los valores de los dos campos son diferentes utilizando la expresión `fieldValue1 !== fieldValue2`.
   - Si los valores son diferentes, se establece un error en el `field2` indicando que los campos no son iguales mediante `formGroup.get(field2)?.setErrors({ notEqual: true })`, y se devuelve un objeto de error `{ notEqual: true }`.

5. **Eliminación de Errores**
   - Si los valores son iguales, se eliminan los errores del `field2` utilizando `formGroup.get(field2)?.setErrors(null)`.

6. **Retorno de Resultados de Validación**
   - Se devuelve `null` si los valores son iguales, lo que indica que la validación ha tenido éxito.

En resumen, esta función de validación comprueba si los valores de dos campos en un formulario son iguales. Si los valores son diferentes, se establece un error en el segundo campo y se devuelve un objeto de error. Si los valores son iguales, se eliminan los errores del segundo campo y se devuelve `null`.

Espero que esta explicación aclare el funcionamiento de la función de validación. Si tienes más preguntas al respecto, no dudes en preguntar.
   *
   */


}
