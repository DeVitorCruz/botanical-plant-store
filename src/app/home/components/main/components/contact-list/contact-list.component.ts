import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { BADGE_INFO } from './constants/BADGE_INFO';
import { BadgeInfo } from './interface/badge-info/badge-info';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  imports: [
    NgFor,
    MatIconModule
  ],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent {
  public badgeInfo: BadgeInfo[] = BADGE_INFO;
  
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon('truck-solid', 
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/contact-list/truck-solid.svg')
    );
    this.matIconRegistry.addSvgIcon('gift-solid', 
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/contact-list/gift-solid.svg')
    );
    this.matIconRegistry.addSvgIcon('rotate-left-solid', 
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/contact-list/rotate-left-solid.svg')
    );
    this.matIconRegistry.addSvgIcon('phone-solid', 
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/contact-list/phone-solid.svg')
    );
  }
}
