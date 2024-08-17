import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartDataService } from '../../services/cart-data.service';
import { Product } from '../../../models/product';
import { IcartItem } from '../../../models/cartItem.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnDestroy{

  constructor(private cartService: CartDataService){}

  ngOnDestroy(): void {
    this.cart = [];
  }

  cart: (IcartItem|undefined)[] = []
  subTotal: number = 0;

  ngOnInit(): void {
    this.cartService.list$.subscribe(data => {
      this.cart = data;
      console.log("received: " + this.cart.at(1)?.product?.id)
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
  let p;
  for(let i = 0; i<this.cart.length; i++){
     p = this.cart.at(i);
     if(p?.qty != undefined && p.product != undefined){
      this.subTotal += p.qty * p.product.price
     }
  }
}



}
