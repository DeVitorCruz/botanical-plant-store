import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangMenuComponent } from './lang-menu.component';

describe('LangMenuComponent', () => {
  let component: LangMenuComponent;
  let fixture: ComponentFixture<LangMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
