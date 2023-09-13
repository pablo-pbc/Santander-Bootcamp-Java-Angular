import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  sac: string[];
  politics: string[];
  social: string[];

  constructor() {
    this.sac = [
      'Suporte',
      'Política de privacidade',
      'Termos de uso do site',
      'Mapa do site',
      'PlayStation Studios',
      'Legal',
      'Sobre a SIE',
    ];

    this.politics = [
      'Termos de serviço da PSN',
      'Política de cancelamento da PS Store',
      'Avisos de saúde',
      'Sobre as classificações',
    ];

    this.social = [
      'Facebook',
      'Twitter',
      'YouTube',
      'Instagram',
      'Aplicativo para Android',
      'Aplicativo para iOS',
    ];
  }
}
