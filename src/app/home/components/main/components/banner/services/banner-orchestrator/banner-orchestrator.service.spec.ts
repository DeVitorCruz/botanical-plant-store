import { TestBed } from '@angular/core/testing';

import { BannerOrchestratorService } from './banner-orchestrator.service';

describe('BannerOrchestratorService', () => {
  let service: BannerOrchestratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannerOrchestratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
