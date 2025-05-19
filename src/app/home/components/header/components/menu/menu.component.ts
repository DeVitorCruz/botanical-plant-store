import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MENU_ITEMS } from './constants/MENU_ITEMS';
import { MenuItem } from './interfaces/menu-panel/menu-item';
import { CollapseMenuService } from '../../services/collapse-menu.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NgFor, 
    NgIf, 
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  public menuItems: MenuItem[] = MENU_ITEMS;

  constructor(private collapseMenuService: CollapseMenuService) {}

  public toggleCollapse(): void {
    this.collapseMenuService.toggle();
  }
}
