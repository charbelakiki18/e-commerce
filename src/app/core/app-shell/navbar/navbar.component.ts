import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(){}

  @Output() messageEvent = new EventEmitter();

  sendData(search: string) {
    this.messageEvent.emit(search)
  }
}
