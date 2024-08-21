import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../models/product';
import { IcartItem } from '../../models/cartItem.model';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {
  cartItem : IcartItem | undefined
  private cart: (IcartItem|undefined)[] = this.loadFromLocalStorage();
  private cartSubject = new BehaviorSubject<(IcartItem | undefined)[]>(this.cart);
  list$ = this.cartSubject.asObservable();

  addProduct(cartProduct: Product | undefined, qty: number){
    this.cart.push({product: cartProduct, qty: qty});
    this.updateLocalStorage();
    this.cartSubject.next(this.cart);
    console.log("Added: " + cartProduct?.id)
  }

  removeProduct(cartProduct: Product | undefined){
    this.cart = this.cart.filter(obj => obj?.product?.id != cartProduct?.id);
    this.updateLocalStorage();
    this.cartSubject.next(this.cart);
    console.log("Removed: " + cartProduct?.id)
  }

  private isInCartSubject = new BehaviorSubject<{status: boolean, qty: number | undefined}>({status: false, qty: 0});
  isInCart$ = this.isInCartSubject.asObservable();

  isInCart(cartProduct: Product | undefined){
    let index = this.cart.findIndex(obj => obj?.product?.id === cartProduct?.id);
    if(index != -1){
      this.isInCartSubject.next({status: true, qty: this.cart.at(index)?.qty});
    }else{
      this.isInCartSubject.next({status: false, qty: 0});
    }
  }

  modifyQty(qty: number, id: number){
    let p: IcartItem | undefined
    let index = this.cart.findIndex(obj => obj?.product?.id === id);
    if(index != -1){
      p = this.cart.at(index);
      if(p != undefined){
        p.qty = qty;
      }
      this.updateLocalStorage();
    }
  }

  private updateLocalStorage() {
    localStorage.setItem("productList", JSON.stringify(this.cart));
  }

  private loadFromLocalStorage(): any[] {
    const savedList = localStorage.getItem("productList");
    return savedList ? JSON.parse(savedList) : [];
  }

  constructor() { }
}
