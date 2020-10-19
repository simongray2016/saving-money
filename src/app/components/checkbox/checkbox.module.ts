import { FlexModule } from 'ng-zorro-antd-mobile';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox.component';



@NgModule({
  declarations: [CheckboxComponent],
  imports: [
    CommonModule,
    FlexModule
  ],
  exports: [CheckboxComponent]
})
export class CheckboxModule { }
