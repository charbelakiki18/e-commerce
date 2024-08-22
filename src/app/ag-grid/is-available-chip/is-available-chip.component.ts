import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';


@Component({
  selector: 'app-is-available-chip',
  templateUrl: './is-available-chip.component.html',
  styleUrl: './is-available-chip.component.scss'
})
export class IsAvailableChipComponent implements ICellRendererAngularComp {
  isAvailable: any;
  agInit(params: ICellRendererParams<any, any, any>): void {
    if(params.value){
      this.isAvailable = "Available";
    }else{
      this.isAvailable = "Out of stock";
    }
    
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    this.isAvailable = params.value;
    return true;
  }

}
