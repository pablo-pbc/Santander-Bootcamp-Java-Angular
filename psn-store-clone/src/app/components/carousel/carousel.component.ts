import { Component, Input, OnInit } from '@angular/core';

interface Card {
  src?: string;
  name?: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})

export class CarouselComponent implements OnInit{
  @Input()
  carouselTitle: string;
  prefix: string;

  games: Card[] = [];
  responsiveOptions: any[] | undefined;

  navigators: boolean;
  indicators: boolean;

  windowWidth: number;

  constructor() {
    this.carouselTitle = '';
    this.prefix = 'assets/carousel-1/';

    this.navigators = true;
    this.indicators = false;

    this.windowWidth = window.innerWidth;
  }

  navigatorsDisplay() {
    return this.windowWidth < 600 ? !this.navigators : this.navigators;
  }

  indicatorsDisplay() {
    return this.windowWidth < 600 ? !this.indicators : this.indicators;
  }

  ngOnInit(): void {
    this.games = [
      {
        src: `${this.prefix}img-1.png`,
        name: 'Fortnite',
      },
      {
        src: `${this.prefix}img-2.png`,
        name: 'EA SPORTS FC™ 24',
      },
      {
        src: `${this.prefix}img-3.png`,
        name: 'EA SPORTS™ FIFA 23',
      },
      {
        src: `${this.prefix}img-4.png`,
        name: 'ARMORED CORE™ VI FIRES OF RUBICON',
      },
      {
        src: `${this.prefix}img-5.png`,
        name: 'Call of Duty®',
      },
      {
        src: `${this.prefix}img-6.png`,
        name: 'Grand Theft Auto V (PlayStation®5)',
      },
      {
        src: `${this.prefix}img-7.png`,
        name: 'Baldur\'s Gate 3',
      },
      {
        src: `${this.prefix}img-8.png`,
        name: 'Red Dead Redemption 2',
      },
      {
        src: `${this.prefix}img-9.png`,
        name: 'Tom Clancy\'s Rainbow Six® Siege',
      },
      {
        src: `${this.prefix}img-10.png`,
        name: 'Mortal Kombat 1',
      }
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1326px',
        numVisible: 4,
        numScroll: 4,
      },
      {
        breakpoint: '1030px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 2,
      },
    ];
  }
}

