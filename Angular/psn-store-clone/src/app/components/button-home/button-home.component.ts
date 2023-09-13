import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-home',
  templateUrl: './button-home.component.html',
  styleUrls: ['./button-home.component.css']
})
export class ButtonHomeComponent {
  @Input()
  label: string = 'Example';
}
