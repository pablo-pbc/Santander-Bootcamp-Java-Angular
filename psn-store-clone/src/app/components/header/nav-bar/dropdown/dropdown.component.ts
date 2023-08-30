import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  items: string[] = [
    'Jogos',
    'Hardware',
    'Serviços',
    'Noticias',
    'Loja',
    'Suporte'
  ];
}
