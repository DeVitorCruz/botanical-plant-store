import { Injectable, WritableSignal, signal, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Slide } from '../../components/slick-track/interfaces/slide';

@Injectable({
  providedIn: 'root'
})
export class BannerOrchestratorService {

  public activeIndex: WritableSignal<number> = signal(0);
  public isBrowser: WritableSignal<boolean> = signal(false);
  private timer?: ReturnType<typeof setInterval>;

  constructor(@Inject(PLATFORM_ID) public platformId: object) {
    this.isBrowser.set(isPlatformBrowser(platformId));
  }

  public startAutoSlide(slide: Slide[]): void {
    if(this.isBrowser() && !this.timer) {
      this.timer = setInterval(()=>{
        this.next(slide);
      }, 5000);
    }
  }

  public stopAutoSlide(): void {
    if(this.timer) {
       clearInterval(this.timer);
       this.timer = undefined;
    }
  }

  public next(slide: Slide[]): void {
    this.setActive(this.activeIndex() + 1, slide);
  }

  public prev(slide: Slide[]): void {
    this.setActive(this.activeIndex() - 1, slide);
  }

  public setActive(index: number, slide: Slide[]): void {
    const newIndex = (index + slide.length) % slide.length;
    this.activeIndex.set(newIndex);
  }
}
