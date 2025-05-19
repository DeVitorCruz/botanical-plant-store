import { Component } from '@angular/core';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { InformationComponent } from './components/information/information.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { PopularTagComponent } from './components/popular-tag/popular-tag.component';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [
    ContactUsComponent,
    InformationComponent,
    MyAccountComponent,
    PopularTagComponent
  ],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {

}
