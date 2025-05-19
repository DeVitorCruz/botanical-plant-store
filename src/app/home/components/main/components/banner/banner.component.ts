import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SlickTrackComponent } from './components/slick-track/slick-track.component';
import { Slide } from './components/slick-track/interfaces/slide';
import { SLIDES } from './components/slick-track/constants/SLIDES';

@Component({
  selector: 'app-banner',
  imports: [
    MatButtonModule,
    SlickTrackComponent
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  public slides: Slide[] = SLIDES;
  public activeIndex: number = 0;
}
