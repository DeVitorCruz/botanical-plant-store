import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-justify',
  imports: [
    MatIconModule
  ],
  templateUrl: './justify.component.html',
  styleUrl: './justify.component.scss'
})
export class JustifyComponent {
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
