import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidator implements AsyncValidator {

//clase 256
  validate(control: AbstractControl ): Observable<ValidationErrors | null> {

    const email = control.value;
    console.log(email);

    const httpCallObservable = new Observable<ValidationErrors|null>( (subscriber) => {

      console.log({ email });

      if ( email === 'fernando@google.com' ) {
        subscriber.next({ emailTaken: true });
        subscriber.complete();
        // return;
      }

      subscriber.next(null);
      subscriber.complete();


    }).pipe(
      delay( 3000 )
    );

    return httpCallObservable;

  }


  /*
#### **Explicación del Código de Validación con Observables**

1. **Parámetro de Entrada**
   - La función `validate` toma un parámetro `control` de tipo `AbstractControl` que representa el control
   (por ejemplo, un campo de entrada) que se está validando.

2. **Extracción de Valor de Email**
   - Se extrae el valor del control (presumiblemente un campo de correo electrónico) y se almacena en la variable `email`.
   - Se imprime el valor del correo electrónico en la consola mediante `console.log(email)`.

3. **Creación de Observable**
   - Se crea un nuevo objeto Observable que emite resultados de validación asincrónica.
   - En el constructor del Observable, se define una función de suscripción que recibe un `subscriber` al que se le puede enviar valores y completar la operación.
   - Se imprime el valor del correo electrónico en la consola mediante `console.log({ email })`.

4. **Validación Asincrónica**
   - Se verifica si el correo electrónico es igual a 'fernando@google.com'.
   - Si es igual, se emite un error de validación indicando que el correo electrónico está tomado (usando `subscriber.next({ emailTaken: true })`) y se completa la operación.
   - Si no es igual, se emite un resultado de validación nulo (usando `subscriber.next(null)`) y se completa la operación.

5. **Retraso en la Respuesta**
   - El Observable se transforma con `pipe(delay(3000))`, lo que implica un retraso de 3000 milisegundos en la emisión de los resultados.

6. **Retorno del Observable**
   - La función devuelve el Observable resultante que representa la validación asincrónica.

En resumen, este código representa una función de validación asincrónica que utiliza Observables para realizar una verificación de correo electrónico. Si el correo electrónico es igual a 'fernando@google.com', se emite un error de validación después de un retraso de 3000 milisegundos. De lo contrario, se emite un resultado de validación nulo después del mismo retraso.

Espero que esta explicación te ayude a comprender el código. Si tienes alguna otra pregunta al respecto, no dudes en preguntar.


  */



// clase 255
  // validate(control: AbstractControl ): Observable<ValidationErrors | null> {

  //   const email = control.value;
  //   console.log({ email })

  //   return of({
  //     emailTaken: true
  //   }).pipe(
  //     delay( 2000 )
  //   );

  // }


}

//clase 256
// a traves de un endpoint se manda el email y le regreso si ya fue tomado o no basado en la respuesta
// regresa null o emailTaken
// return this.http.get<any[]>(`http://localhost:3000/users?q=${ email }`)
// .pipe(
//   // delay(3000),
//   map( resp => {
//     return ( resp.length === 0 )
//         ? null
//         : { emailTaken: true }
//   })
// );
