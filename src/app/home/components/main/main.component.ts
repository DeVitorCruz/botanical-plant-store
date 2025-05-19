import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { JustifyComponent } from './components/justify/justify.component';
import { FeatureProductsComponent } from './components/feature-products/feature-products.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { OfferProductComponent } from './components/offer-product/offer-product.component';
import { PartnerComponent } from './components/partner/partner.component';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    BannerComponent,
    JustifyComponent,
    FeatureProductsComponent,
    ContactListComponent,
    OfferProductComponent,
    PartnerComponent,
    ProductCarouselComponent,
    SubscriptionComponent,
    MatIconModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
