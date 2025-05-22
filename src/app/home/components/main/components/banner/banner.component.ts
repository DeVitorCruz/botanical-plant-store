import { AfterViewInit, Component, Output, EventEmitter, OnDestroy, signal, effect, computed } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SlickTrackComponent } from './components/slick-track/slick-track.component';
import { Slide } from './components/slick-track/interfaces/slide';
import { SLIDES } from './components/slick-track/constants/SLIDES';
import { BannerOrchestratorService } from './services/banner-orchestrator/banner-orchestrator.service';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-banner',
  imports: [
    NgClass,
    NgFor,
    MatButtonModule,
    SlickTrackComponent
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements AfterViewInit, OnDestroy {
  
  @Output() public activeIndexChange = new EventEmitter<number>();
  public slides: Slide[] = SLIDES;
  public activeIndex: ReturnType<typeof computed<number>> = computed(() => this.bannerOrchestratorService.activeIndex());
  public isBrowser: ReturnType<typeof signal<boolean>> = signal(false);

  constructor(public bannerOrchestratorService: BannerOrchestratorService) {
    effect(() => {
      const value: number = this.bannerOrchestratorService.activeIndex();
      this.activeIndexChange.emit(value);
    });
  }

  public next(): void { 
    this.bannerOrchestratorService.next(this.slides); 
  }

  public prev(): void { 
    this.bannerOrchestratorService.prev(this.slides); 
  }

  public setActive(): void {
    this.bannerOrchestratorService.setActive(this.activetedIndex, this.slides);
  }

  public ngAfterViewInit(): void {
    this.bannerOrchestratorService.startAutoSlide(this.slides);
  }

  public ngOnDestroy(): void {
    this.bannerOrchestratorService.stopAutoSlide();
  }

  get activetedIndex(): number {
    return this.bannerOrchestratorService.activeIndex();
  }
}
