import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { GridOptions } from 'ag-grid-community';


@Component({
  selector: 'app-ag-delete-button',
  templateUrl: './ag-delete-button.component.html',
  styleUrl: './ag-delete-button.component.scss'
})
export class AgDeleteButtonComponent implements ICellRendererAngularComp{
  agInit(params: ICellRendererParams<any, any, any>): void {
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true;
  }

  @Input() params: any;
  @Output() onDelete = new EventEmitter<any>();

  onClick(event: any) {
    this.onDelete.emit(this.params.data.name);
  }
}
