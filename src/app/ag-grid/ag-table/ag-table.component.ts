import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { IsAvailableChipComponent } from '../is-available-chip/is-available-chip.component';
import { AgDeleteButtonComponent } from '../ag-delete-button/ag-delete-button.component';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-ag-table',
  templateUrl: './ag-table.component.html',
  styleUrl: './ag-table.component.scss',
  standalone: true,
  imports: [AgGridAngular],
})
export class AgTableComponent implements OnInit {

  pagination: boolean;
  paginationPageSize: number;
  paginationPageSizeSelector: number[];
  private gridApi: any;
  private gridColumnApi: any;
  // Row Data: The data to be displayed.
 rowData = [
  {
    name: "Smartphone X",
    description: "High-performance smartphone with advanced features",
    price: 699.99,
    category: "Electronics",
    isAvailable: true
  },
  {
    name: "Laptop Y",
    description: "Thin and lightweight laptop for work and entertainment",
    price: 1299.99,
    category: "Electronics",
    isAvailable: false
  },
  {
    name: "Fitness Tracker Z",
    description: "Wearable device to track fitness activities and health metrics",
    price: 99.95,
    category: "Fitness",
    isAvailable: true
  },
  {
    name: "Wireless Earbuds A",
    description: "Bluetooth earbuds with noise-canceling technology",
    price: 129.99,
    category: "Electronics",
    isAvailable: true
  },
  {
    name: "Exercise Bike B",
    description: "Indoor exercise bike with adjustable resistance levels",
    price: 299.99,
    category: "Fitness",
    isAvailable: false
  }
]

constructor(){
  this.pagination = true;
  this.paginationPageSize = 500;
  this.paginationPageSizeSelector = [200, 500, 1000];
}

colDefs: ColDef[] = [
  { field: "name", filter:true },
  { field: "description", filter:true, editable: true },
  { field: "price", valueFormatter: p=> '$' + p.value.toLocaleString(), filter:true},
  { field: "category", filter:true },
  { field: "isAvailable", filter:true,cellRenderer: IsAvailableChipComponent,
    cellStyle: params => {
      if (params.value === true) {
          
          return {color: 'green'};
      }else{
        return{color: 'red'};
      }
  }},
  { field: "", cellRenderer: AgDeleteButtonComponent }
];

gridOptions: GridOptions = {};

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  deleteRow(id: any) {
    this.rowData = this.rowData.filter(row => row.name !== id);
    this.gridApi.setRowData(this.rowData);
  }

ngOnInit(): void {
}

}
