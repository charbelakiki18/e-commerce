import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AuthGuard } from '../../core/auth/guards/auth-guard.guard';

const routes: Routes = [
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'product-details', component: ProductDetailsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
