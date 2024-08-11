import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../../services/cart-data.service';
import { Product } from '../../../models/product';
import { IcartItem } from '../../../models/cartItem.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent{

  constructor(private cartService: CartDataService){}

  cart: (IcartItem|undefined)[] = []

  ngOnInit(): void {
    this.cartService.list$.subscribe(data => {
      this.cart = data;
      console.log("received: " + this.cart.at(1)?.product?.id)
    })
  }

  getTotal(product: IcartItem | undefined){
    if(product != undefined && product.product != undefined){
      return product.product.price * product.qty;
    }else{
      return null;
    }
    
  }



}
