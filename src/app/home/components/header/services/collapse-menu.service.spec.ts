import { TestBed } from '@angular/core/testing';

import { CollapseMenuService } from './collapse-menu.service';

describe('CollapseMenuService', () => {
  let service: CollapseMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollapseMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
