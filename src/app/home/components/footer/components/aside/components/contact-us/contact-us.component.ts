import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon('facebook-f-brands', 
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/social-media/facebook/facebook-f-brands.svg')
    );

    this.matIconRegistry.addSvgIcon('x-twitter-brands', 
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/social-media/twitter/x-twitter-brands.svg')
    );

    this.matIconRegistry.addSvgIcon('pinterest-brands', 
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/social-media/pinterest/pinterest-brands.svg')
    );

    this.matIconRegistry.addSvgIcon('google-plus-g-brands', 
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/social-media/googleplus/google-plus-g-brands.svg')
    );
  }
}
