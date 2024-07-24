import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './features/user-settings/components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './features/product-listing/components/products/products.component';
import { NavbarComponent } from './core/app-shell/navbar/navbar.component';
import { SignUpComponent } from './core/auth/components/sign-up/sign-up.component';
import { SignInComponent } from './core/auth/components/sign-in/sign-in.component';
import { InterceptorInterceptor } from './core/auth/interceptors/interceptor.interceptor';
import { SignUpAdminComponent } from './core/auth/components/sign-up-admin/sign-up-admin.component';
import {NgxPermissionsModule} from 'ngx-permissions';
import { AgTableComponent } from './ag-grid/ag-table/ag-table.component';
import { IsAvailableChipComponent } from './ag-grid/is-available-chip/is-available-chip.component';
import { AgDeleteButtonComponent } from './ag-grid/ag-delete-button/ag-delete-button.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ProductsComponent,
    NavbarComponent,
    SignUpComponent,
    SignInComponent,
    SignUpAdminComponent,
    IsAvailableChipComponent,
    AgDeleteButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPermissionsModule.forRoot(),
    AgTableComponent
],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
