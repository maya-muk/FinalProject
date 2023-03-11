import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CardComponent } from './card/card.component';
import { RideDetailsComponent } from './ride-details/ride-details.component';


@NgModule({
  declarations: [
    IndexComponent,
    AboutComponent,
    ContactusComponent,
    TestimonialComponent,
    CardComponent,
    RideDetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
