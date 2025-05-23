import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { JustifyContent } from './interface/justify-content/justify-content';
import { JUSTIFY_INFO } from './constants/JUSTIFY_INFO';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-justify',
  imports: [
    NgFor,
    MatIconModule
  ],
  templateUrl: './justify.component.html',
  styleUrl: './justify.component.scss'
})
export class JustifyComponent {
  public justifyContentList: JustifyContent[] = JUSTIFY_INFO;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon('leaf-solid', 
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/justify-img/icons/leaf-solid.svg')
    );
    this.matIconRegistry.addSvgIcon('seedling-solid', 
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/justify-img/icons/seedling-solid.svg')
    );
    this.matIconRegistry.addSvgIcon('tree-solid', 
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/justify-img/icons/tree-solid.svg')
    );
  }
}
