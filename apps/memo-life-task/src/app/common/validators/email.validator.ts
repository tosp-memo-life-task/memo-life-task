import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { isEmail } from 'class-validator';

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const invalidFormat = !isEmail(control.value);
    return invalidFormat ? { invalidFormat: 'Invalid email format' } : null;
  };
}
