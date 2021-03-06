import { AbstractControl, ValidatorFn } from '@angular/forms';

export class NumberValidators {
    //TODO: custom validator (en esta caso método estático)
    static range(min:number, max:number): ValidatorFn {
        // Si devuelve true es que NO ha validado
        // Si devuelve null es que ha ido correcto
        return (c: AbstractControl): {[key: string]: boolean} | null => {
            if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
                return {'range': true}
            }
            return null;
        }
    }
}
