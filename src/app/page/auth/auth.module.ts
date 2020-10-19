import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignTabComponent } from './sign-tab/sign-tab.component';
import { TabsModule, InputItemModule } from 'ng-zorro-antd-mobile';
import { SignInFormComponent } from './sign-tab/sign-in-form/sign-in-form.component';
import { FormFieldModule } from '../../components/form-field/form-field.module';


@NgModule({
  declarations: [AuthComponent, SignTabComponent, SignInFormComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    TabsModule,
    FormFieldModule
  ]
})
export class AuthModule { }
