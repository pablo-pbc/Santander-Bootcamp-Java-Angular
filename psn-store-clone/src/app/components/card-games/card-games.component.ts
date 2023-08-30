import { Component } from '@angular/core';

@Component({
  selector: 'app-card-games',
  templateUrl: './card-games.component.html',
  styleUrls: ['./card-games.component.css']
})
export class CardGamesComponent {
  games: string [];
  prefix: string;

  constructor() {
    this.prefix = 'assets/cards/';

    this.games = [
      `${this.prefix}game-1.png`,
      `${this.prefix}game-2.png`,
      `${this.prefix}game-3.png`,
      `${this.prefix}game-4.png`,
      `${this.prefix}game-5.png`,
      `${this.prefix}game-6.png`,
      `${this.prefix}game-7.png`,
    ];
  }
}
