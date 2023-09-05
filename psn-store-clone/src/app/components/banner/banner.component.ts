import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  @Input() src: string;
  @Input() descrition: string;
  @Input() descritionDisplay: string;
  @Input() titleDisplay: string;
  @Input() title: string;
  @Input() text: string;
  @Input() button: string;

  constructor() {
    this.src = '';
    this.descrition = '';
    this.descritionDisplay = '';
    this.titleDisplay = '';
    this.title = '';
    this.text = '';
    this.button = '';
  }
}
