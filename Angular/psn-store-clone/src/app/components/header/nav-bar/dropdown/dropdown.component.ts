import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  items: string[];
  @Input('class') klass: string

  isRotated: boolean[];
  isOnTop: boolean;

  constructor() {
    this.items = [
      'Jogos',
      'Hardware',
      'Serviços',
      'Noticias',
      'Loja',
      'Suporte'
    ];

    this.klass = '';
    this.isOnTop = false;
    this.isRotated = Array(this.items.length).fill(false);
  }

  toggleDropdown(index: number) {
    this.isOnTop = !this.isOnTop;    
    this.isRotated[index] = !this.isRotated[index];
  }
}
