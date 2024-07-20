import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './features/user-settings/components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './features/product-listing/components/products/products.component';
import { NavbarComponent } from './core/app-shell/navbar/navbar.component';
import { SignUpComponent } from './core/auth/components/sign-up/sign-up.component';
import { SignInComponent } from './core/auth/components/sign-in/sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ProductsComponent,
    NavbarComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
