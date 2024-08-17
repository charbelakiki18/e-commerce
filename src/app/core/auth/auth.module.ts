import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpAdminComponent } from './components/sign-up-admin/sign-up-admin.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SharedModule } from '../app-shell/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpAdminComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgxPermissionsModule.forRoot(),
  ]
})
export class AuthModule { }
