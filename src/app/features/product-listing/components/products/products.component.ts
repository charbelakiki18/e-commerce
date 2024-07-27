import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../../models/product';
import { DataService } from '../../../../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{

  constructor(private productService: ProductsService, private dataService:DataService) { }
public products: Product[]= [];
public filtered_products: Product[]= [];
search: any

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products)
    });
    this.dataService.currentData.subscribe(data => {
      this.search = data;
      this.onSearch(this.search)
    })

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
