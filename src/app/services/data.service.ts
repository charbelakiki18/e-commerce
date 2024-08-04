import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../features/models/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new BehaviorSubject<Product>({id: 0, title: "", price:0, category: "",description:"",image:""});
  data$: Observable<Product> = this.dataSubject.asObservable();

  private dataSubjectSearch = new BehaviorSubject<string>("");
  search$: Observable<string> = this.dataSubjectSearch.asObservable();

  setData(newProduct: Product): void {
    this.dataSubject.next(newProduct);
  }

  setSearch(newSearch: string){
    this.dataSubjectSearch.next(newSearch);
  }

  constructor() { }
}
