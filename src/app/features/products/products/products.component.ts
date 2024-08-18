import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { ProductState } from './state/products.reducers';
import { loadProducts } from './state/products.actions';
import { Router } from '@angular/router';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit, OnDestroy{

  products$: Observable<Product[]>;
  public filtered_products: Product[]= [];
  public products: Product[] = [];
  private subscription: Subscription = new Subscription;
  empty: string = "";
  category: string | undefined = "";

  constructor(private store: Store<{ products: ProductState }>,private router: Router,private service: DataService) {
    this.products$ = this.store.pipe(select(state => state.products.products));
  }


  trackByFn(index: number, item: any): number {
    return item.id;
  }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    this.subscription = this.products$.subscribe(data => {
      console.log(data);
      this.products = data;
    });
    this.service.search$.subscribe(data => {
      if(data != ""){
        this.onSearch(data);
      }
    })

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }

  onCategoryChange(category: String | null){
    if(category === "all"){
      this.filtered_products = this.products;
      
    }
    else{
      this.filtered_products = this.products.filter(product => product.category === category);
    }
    this.category = category?.toUpperCase();
    console.log(this.filtered_products)
  }

  receiveSearch($event: string){
    this.onSearch($event);
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

  goToProductDetails(id: number){
    this.service.setData(this.products[id-1]);
    this.onCategoryChange(this.products[id-1].category);
    this.service.setSimilarProducts(this.filtered_products);
    this.router.navigateByUrl('/product-details')
  }

  sort(value: string) {
    if (Object.isFrozen(this.filtered_products)) {
      this.filtered_products = [...this.filtered_products]; 
    }
    
    switch(value){
      case "p_a":
        this.filtered_products.sort((a,b)=>a.price - b.price);
        break;

      case "p_d":
        this.filtered_products.sort((a,b)=>b.price - a.price);
        break;

      case "t_a":
        this.filtered_products.sort((a,b)=>a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
        break;

      case "t_d":
        this.filtered_products.sort((a,b)=>b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
        break;
    }
    
    console.log(this.filtered_products);
  }
}