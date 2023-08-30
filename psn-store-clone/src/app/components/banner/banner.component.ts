import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  @Input()
  src: string = '';
  @Input()
  descrition: string = '';
  @Input()
  descritionDisplay: string = '';
  @Input()
  title: string = '';
  @Input()
  text: string = '';


}
