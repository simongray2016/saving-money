import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field.component';
import { LabelComponent } from './label/label.component';
import { InputDirective } from 'src/app/shared/directives/input.directive';
import { SuffixIconComponent } from './suffix-icon/suffix-icon.component';


@NgModule({
  declarations: [
    FormFieldComponent,
    LabelComponent,
    InputDirective,
    SuffixIconComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormFieldComponent,
    LabelComponent,
    InputDirective,
    SuffixIconComponent
  ]
})
export class FormFieldModule { }
