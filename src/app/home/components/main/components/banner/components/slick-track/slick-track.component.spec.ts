import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlickTrackComponent } from './slick-track.component';

describe('SlickTrackComponent', () => {
  let component: SlickTrackComponent;
  let fixture: ComponentFixture<SlickTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlickTrackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlickTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
