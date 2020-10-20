import { FormControl, ValidatorFn } from '@angular/forms';


export const phoneNumberFormat: ValidatorFn = (control: FormControl) => {
  if (control.value && (control.value[0] !== '0' || control.value.length !== 10)) {
    return {numberFormat: true};
  }

  return null;
};
