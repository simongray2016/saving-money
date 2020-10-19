import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field.component';
import { LabelComponent } from './label/label.component';
import { InputDirective } from 'src/app/shared/directives/input.directive';


@NgModule({
  declarations: [
    FormFieldComponent,
    LabelComponent,
    InputDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormFieldComponent,
    LabelComponent,
    InputDirective
  ]
})
export class FormFieldModule { }
