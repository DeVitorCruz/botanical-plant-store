import { TestBed } from '@angular/core/testing';

import { SidebarPanelService } from './sidebar-panel.service';

describe('SidebarPanelService', () => {
  let service: SidebarPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
