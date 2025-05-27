import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FeatureProductContent } from './interfaces/feature-product-content/feature-product-content';
import { FEATURE_PRODUCT_CONTENT_LIST } from './constants/FEATURE_PRODUCT_CONTENT_LIST';
import { NgFor } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-feature-products',
  imports: [
    NgFor,
    MatCardModule,
    MatChipsModule,
    MatIconModule
  ],
  templateUrl: './feature-products.component.html',
  styleUrl: './feature-products.component.scss'
})
export class FeatureProductsComponent {
  public featureProductContentList: FeatureProductContent[] = FEATURE_PRODUCT_CONTENT_LIST;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon('heart-regular', 
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/features-products/card/hidden-list/heart-regular.svg')
    );
    
    this.matIconRegistry.addSvgIcon('eye-regular', 
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/features-products/card/hidden-list/eye-regular.svg')
    );
    
    this.matIconRegistry.addSvgIcon('cart-shopping-solid', 
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/features-products/card/hidden-list/cart-shopping-solid.svg')
    );

    this.matIconRegistry.addSvgIcon('arrow-right-arrow-left-solid', 
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/features-products/card/hidden-list/arrow-right-arrow-left-solid.svg')
    );
  }
}
