import { Injectable } from '@angular/core';
import { SidebarPanel } from '../interface/sidebar-panel';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarPanelService {
  private panelSubject = new BehaviorSubject<SidebarPanel>(null);
  public panel$ = this.panelSubject.asObservable();

  public openPanel(panel: SidebarPanel): void {
    this.panelSubject.next(panel);
  }

  public closePanel(): void {
    this.panelSubject.next(null);
  }
}
