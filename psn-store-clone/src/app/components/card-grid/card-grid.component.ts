import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css']
})
export class CardGridComponent {
  games: string [];
  category: string[];
  prefix: string;

  @Input() type: string;
  @Input() titleDisplay: string;

  constructor() {
    this.prefix = 'assets/cards/';
    this.type = 'games'
    this.titleDisplay = 'none';

    this.games = [
      `${this.prefix}game-1.png`,
      `${this.prefix}game-2.png`,
      `${this.prefix}game-3.png`,
      `${this.prefix}game-4.png`,
      `${this.prefix}game-5.png`,
      `${this.prefix}game-6.png`,
      `${this.prefix}game-7.png`,
    ];

    this.category = [
      `${this.prefix}categoria-1.png`,
      `${this.prefix}categoria-2.png`,
      `${this.prefix}categoria-3.png`,
      `${this.prefix}categoria-4.png`,
      `${this.prefix}categoria-5.png`,
      `${this.prefix}categoria-6.png`,
      `${this.prefix}categoria-7.png`,
      `${this.prefix}categoria-8.png`,
    ];
  }

  typeValidation() {
    if (this.type === 'games') {
      return this.games;
    } else {
      return this.category;
    }
  }

}
