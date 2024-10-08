import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartDataService } from '../../services/cart-data.service';
import { Product } from '../../../models/product';
import { IcartItem } from '../../../models/cartItem.model';
import { DataService } from '../../../products/products/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnDestroy, OnInit{
  search: string ="";

discardCart() {
  this.cart = [];
 localStorage.removeItem("productList");
 this.cartService.list$
 window.location.reload();
}

  constructor(private cartService: CartDataService, private service: DataService, private router: Router){}

  ngOnDestroy(): void {
    this.cart = [];
  }

  cart: (IcartItem|undefined)[] = []
  subTotal: number = 0;

  ngOnInit(): void {
    this.cartService.list$.subscribe(data => {
      if(localStorage.getItem('productList') != null){
        this.cart = data;
      }
      
    })
  }

  removeFromCart(product: Product | undefined){
    this.cartService.removeProduct(product);
    this.cartService.isInCart(product);
    console.log(this.cart);
 }

  getTotal(product: IcartItem | undefined){
    if(product != undefined && product.product != undefined){
      return product.product.price * product.qty;
    }else{
      return null;
    }
    
  }

  increaseQty(product: IcartItem | undefined){
      if(product?.qty != undefined){
        product.qty++;
      }
  }

  decreaseQty(product: IcartItem | undefined){
    if(product?.qty != undefined && product?.qty > 1){
      product.qty--;
    }
}

getSubTotal(){
  this.subTotal = 0;
  for(let i = 0; i<this.cart.length; i++){
    let p: IcartItem | undefined
    p = this.cart.at(i);
    if(p != undefined && p.product != undefined){
      this.cartService.modifyQty(p.qty, p.product.id );
    }
    
  }
  let p;
  for(let i = 0; i<this.cart.length; i++){
     p = this.cart.at(i);
     if(p?.qty != undefined && p.product != undefined){
      this.subTotal += p.qty * p.product.price
     }
  }
}

receiveSearch($event: string){
  this.router.navigateByUrl('/products')
  this.search = $event;
  this.service.setSearch(this.search);
 }

}
