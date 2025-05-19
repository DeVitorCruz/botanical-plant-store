import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LangMenuComponent } from './components/lang-menu/lang-menu.component';
import { MenuComponent } from './components/menu/menu.component';
import { CartMenuComponent } from './components/cart-menu/cart-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MENU_ITEMS } from './components/menu/constants/MENU_ITEMS'; 
import { MenuItem } from './components/menu/interfaces/menu-panel/menu-item';
import { CollapseMenuService } from './services/collapse-menu.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    MatToolbarModule,
    LangMenuComponent,
    MenuComponent,
    CartMenuComponent,
    MatMenuModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public menuItems: MenuItem[] = MENU_ITEMS;
  public activeMenu: 'home' | 'about' | 'store' | 'blog' | 'pages' | string | null = null;
  public isOpen: boolean = false;

  constructor(private collapseMenuService: CollapseMenuService) {
    this.collapseMenuService.isOpen$.subscribe((state) => {
      this.isOpen = state;
    });
  }
}
