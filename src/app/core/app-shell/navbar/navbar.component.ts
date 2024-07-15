import { Component } from '@angular/core';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private dataService:DataService){}

  sendData(search: string) {
    this.dataService.changeData(search);
  }
}
