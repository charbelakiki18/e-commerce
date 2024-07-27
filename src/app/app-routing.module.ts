import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './core/auth/components/sign-up/sign-up.component';
import { SignInComponent } from './core/auth/components/sign-in/sign-in.component';
import { ProductsComponent } from './features/product-listing/components/products/products.component';
import { AuthGuard } from './core/auth/guards/auth-guard.guard';
import { SignUpAdminComponent } from './core/auth/components/sign-up-admin/sign-up-admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signup-admin', component: SignUpAdminComponent },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
