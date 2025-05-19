import { Component } from '@angular/core';
import { AsideComponent } from './components/aside/aside.component';

@Component({
  selector: 'app-footer',
  imports: [
    AsideComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
