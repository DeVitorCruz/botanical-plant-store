import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SidebarPanelService } from '../../../../services/sidebar-panel.service';

@Component({
  selector: 'app-cart-menu',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './cart-menu.component.html',
  styleUrl: './cart-menu.component.scss'
})
export class CartMenuComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private sidebarPanelService: SidebarPanelService
  ) {
    this.matIconRegistry.addSvgIcon('heart', 
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/cart-menu/heart-solid.svg')
    );
  }

  public openCart(): void {
    this.sidebarPanelService.openPanel('cart');
  }

  public openFavorite(): void {
    this.sidebarPanelService.openPanel('favorite');
  }

  public openSearch(): void {
    this.sidebarPanelService.openPanel('search');
  }
}
