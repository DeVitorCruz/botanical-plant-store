import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-popular-tag',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './popular-tag.component.html',
  styleUrl: './popular-tag.component.scss'
})
export class PopularTagComponent {

}
