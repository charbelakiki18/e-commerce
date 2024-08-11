import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { Product } from '../../../models/product';
import { Router } from '@angular/router';
import { CartDataService } from '../../../cart/services/cart-data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  search: string = ""
  qty: number = 0
  p: Product | undefined 
  cart: (Product | undefined)[] = []
  isInCart: boolean = false
  constructor(private service: DataService, private router: Router, private cartService: CartDataService){}

  ngOnInit(): void {
    this.service.data$.subscribe(data => {
      this.p = data;
    })
    this.cartService.isInCart$.subscribe(data => {
      this.isInCart = data;
    })
    this.cartService.isInCart(this.p);
  }

  subQty(){
    if(this.qty > 0){
      this.qty--;
    }
  }

 receiveSearch($event: string){
  this.router.navigateByUrl('/products')
  this.search = $event;
  this.service.setSearch(this.search);
 }

 addToCart(product: Product | undefined){
    this.cartService.addProduct(product, this.qty);
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
}
