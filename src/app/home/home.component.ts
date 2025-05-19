import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDrawer } from '@angular/material/sidenav';
import { SidebarPanelService } from './services/sidebar-panel.service';
import { SidebarPanel } from './interface/sidebar-panel';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { SearchPanelComponent } from './components/header/components/cart-menu/components/search-panel/search-panel.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    NgSwitch,
    NgSwitchCase,
    HeaderComponent,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    SearchPanelComponent,
    MainComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('drawer') public drawer!: MatDrawer;
  public activePanel: SidebarPanel = null;

  constructor(private sidebarPanelService: SidebarPanelService) {}

  public ngAfterViewInit(): void {
    this.sidebarPanelService.panel$.subscribe(panel => {
      this.activePanel = panel;

      if (panel) {
        this.drawer.open();
      } else {
        this.drawer.close();
      }
    });
  }

  public closeDrawer(): void {
    this.sidebarPanelService.closePanel();
  }
}
