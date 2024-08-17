import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './features/user-settings/components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorInterceptor } from './core/auth/interceptors/interceptor.interceptor';
import { AgTableComponent } from './ag-grid/ag-table/ag-table.component';
import { IsAvailableChipComponent } from './ag-grid/is-available-chip/is-available-chip.component';
import { AgDeleteButtonComponent } from './ag-grid/ag-delete-button/ag-delete-button.component';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './core/auth/state/auth.reducer';
import { productReducer } from './features/products/products/state/products.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './features/products/products/state/products.effects';
import { AuthEffects } from './core/auth/state/auth.effects';
import { AuthGuard } from './core/auth/guards/auth-guard.guard';
import { AuthModule } from './core/auth/auth.module';
import { ProductsModule } from './features/products/products.module';
import { CartModule } from './features/cart/cart.module';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    IsAvailableChipComponent,
    AgDeleteButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      auth: authReducer,
      products: productReducer
    }),
    AgTableComponent,
    EffectsModule.forRoot([ProductEffects, AuthEffects]),
    AuthModule,
    ProductsModule,
    CartModule,
    ReactiveFormsModule,
],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor,
    multi: true
  }, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
