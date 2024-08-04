import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { Product } from '../../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  search: string = ""
  qty: number = 0
  p: Product | undefined
  constructor(private service: DataService, private router: Router){}

  ngOnInit(): void {
    this.service.data$.subscribe(data => {
      this.p = data;
    })
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
}
