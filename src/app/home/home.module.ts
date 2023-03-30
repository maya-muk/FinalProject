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
import { RidesComponent } from './rides/rides.component';
import { StationsComponent } from './stations/stations.component';
import { TicketComponent } from './ticket/ticket.component';


@NgModule({
  declarations: [
    IndexComponent,
    AboutComponent,
    ContactusComponent,
    TestimonialComponent,
    CardComponent,
    RideDetailsComponent,
    RidesComponent,
    StationsComponent,
    TicketComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
