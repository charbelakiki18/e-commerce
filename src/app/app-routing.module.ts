import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule) },
  { path: 'home', loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule) },
  { path: 'checkout', loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule) },
  { path: 'user', loadChildren: () => import('./features/user-settings/components/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'admin', loadChildren: () => import('./features/user-settings/components/dashboard/dashboard/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
