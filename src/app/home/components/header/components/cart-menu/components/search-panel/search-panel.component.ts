import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-search-panel',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  templateUrl: './search-panel.component.html',
  styleUrl: './search-panel.component.scss'
})
export class SearchPanelComponent {
  public query: string = '';
  public filter: 'products' | 'articles' = 'products';

  public setFilter(value: 'products' | 'articles'): void {
    this.filter = value;
  }

  public onSearch(): void {
    console.log(`Searching for ${this.query} in ${this.filter}`);
  }
}
