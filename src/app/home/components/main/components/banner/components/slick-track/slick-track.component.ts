import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SLIDES } from './constants/SLIDES';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { Slide } from './interfaces/slide';
import { fadeCross } from './animations/fadeCross.animation';

@Component({
  selector: 'app-slick-track',
  imports: [
    MatButtonModule,
    MatIconModule,
    NgIf,
    NgFor
  ],
  templateUrl: './slick-track.component.html',
  styleUrl: './slick-track.component.scss',
  animations: [
    fadeCross()
  ]
})
export class SlickTrackComponent {
  @Input() public slides: Slide[] = [];
  @Input() public activeIndex: number = 0;

}
