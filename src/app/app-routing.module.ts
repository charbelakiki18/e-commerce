import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './core/auth/components/sign-up/sign-up.component';
import { SignInComponent } from './core/auth/components/sign-in/sign-in.component';
import { ProductsComponent } from './features/product-listing/components/products/products.component';
import { authGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  { path: ' ', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'products', component: ProductsComponent, canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
