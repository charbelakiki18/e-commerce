import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../../models/product';
import { DataService } from '../../../../data.service';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { ProductState } from '../../state/products.reducers';
import { loadProducts } from '../../state/products.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit, OnDestroy{
  products$: Observable<Product[]>;

  constructor(private store: Store<{ products: ProductState }>) {
    this.products$ = this.store.pipe(select(state => state.products.products));
  }
public filtered_products: Product[]= [];
public products: Product[] = [];
private subscription: Subscription = new Subscription;

trackByFn(index: number, item: any): number {
  return item.id;
}
search: any

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    this.subscription = this.products$.subscribe(data => {
      console.log(data);
      this.products = data;
    });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }

  onCategoryChange(category: string){
    this.filtered_products = this.products.filter(product => product.category === category);
    console.log(this.filtered_products)
  }

  onSearch(search: string){
    this.filtered_products = this.products.filter(product => {
      let list = product.title.split(" ")
      for(let i = 0; i<list.length ; i++){
        if(list[i].toLowerCase() == search.toLowerCase())
          return true;
      }
      return false;
    });
    console.log(search)
    console.log(this.filtered_products)
  }

}