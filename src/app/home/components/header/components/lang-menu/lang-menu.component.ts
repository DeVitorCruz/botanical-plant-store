import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-lang-menu',
  standalone: true,
  imports: [
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './lang-menu.component.html',
  styleUrl: './lang-menu.component.scss'
})
export class LangMenuComponent {
  public activeMenu: 'menu' | 'lang' | 'currency' | null = null;
}
