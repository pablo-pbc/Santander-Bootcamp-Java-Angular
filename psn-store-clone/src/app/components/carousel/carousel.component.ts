import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  @Input() carouselTitle: string;

  games: string[];
  nameGames: string[];
  prefix: string;

  responsiveOptions: any[] | undefined;

  constructor() {
    this.carouselTitle = '';

    this.prefix = 'assets/carousel-1/';

    this.nameGames = [
      'Fortnite',
      'EA SPORTS FC™ 24',
      'EA SPORTS™ FIFA 23',
      'ARMORED CORE™ VI FIRES OF RUBICON™',
      'Call of Duty®',
      'Grand Theft Auto V (PlayStation®5)',
      'Baldur\'s Gate 3',
      'Red Dead Redemption 2',
      'Tom Clancy\'s Rainbow Six® Siege',
      'Mortal Kombat 1',
    ];

    this.games = [
      `${this.prefix}img-1.png`,
      `${this.prefix}img-2.png`,
      `${this.prefix}img-3.png`,
      `${this.prefix}img-4.png`,
      `${this.prefix}img-5.png`,
      `${this.prefix}img-6.png`,
      `${this.prefix}img-7.png`,
      `${this.prefix}img-8.png`,
      `${this.prefix}img-9.png`,
      `${this.prefix}img-10.png`,
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
