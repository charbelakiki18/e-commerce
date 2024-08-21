import { Component, OnInit } from '@angular/core';
import { DataService } from '../products/services/data.service';
import { Product } from '../../models/product';
import { Router } from '@angular/router';
import { CartDataService } from '../../cart/services/cart-data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  search: string = ""
  qty: number | undefined = 0
  p: Product | undefined 
  cart: (Product | undefined)[] = []
  isInCart: boolean = false
  similarProducts: Product[] = []
  constructor(private service: DataService, private router: Router, private cartService: CartDataService){}

  ngOnInit(): void {
    this.service.data$.subscribe(data => {
      this.p = data;
    })
    this.cartService.isInCart$.subscribe(data => {
      this.isInCart = data.status;
      this.qty = data.qty;
    })
    this.cartService.isInCart(this.p);
    this.service.similarProducts$.subscribe(data => {
      for(let i = 0; i < 4; i++){
        this.similarProducts[i] = data[i];
      }
    })
  }

  subQty(){
    if(this.qty != undefined && this.qty > 1){
        this.qty--;
    }
    
  }

  addQty(){
    if(this.qty != undefined){
        this.qty++;
    }
    
  }

 receiveSearch($event: string){
  this.router.navigateByUrl('/products')
  this.search = $event;
  this.service.setSearch(this.search);
 }

 addToCart(product: Product | undefined){
  if(this.qty != undefined){
    this.cartService.addProduct(product, this.qty);
  }
    this.cartService.isInCart(product);
 }

 inCart(product: Product | undefined){
  this.cartService.isInCart(product);
 }

 removeFromCart(product: Product | undefined){
    this.cartService.removeProduct(product);
    this.cartService.isInCart(product);
    console.log(this.cart);
 }

 goToProductDetails(product: Product){
  this.qty = 0;
  this.service.setData(product);
  this.router.navigateByUrl('/product-details')
  this.cartService.isInCart(product);
}
}
