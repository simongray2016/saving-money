import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignTabComponent } from './sign-tab/sign-tab.component';
import { TabsModule } from 'ng-zorro-antd-mobile';


@NgModule({
  declarations: [AuthComponent, SignTabComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    TabsModule
  ]
})
export class AuthModule { }
