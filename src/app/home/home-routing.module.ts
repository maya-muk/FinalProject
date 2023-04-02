import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { IndexComponent } from './index/index.component';
import { RideDetailsComponent } from './ride-details/ride-details.component';
import { RidesComponent } from './rides/rides.component';
import { StationsComponent } from './stations/stations.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  {
    path:"",
    component:IndexComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"contact",
    component:ContactusComponent
  },
  {
    path:"testimonial",
    component:TestimonialComponent
  },
  {
    path:"rideDetails",
    component:RideDetailsComponent
  },
  {
    path:"allrides",
    component:RidesComponent
  },
  {
    path:"station",
    component:StationsComponent
  },
  {
    path:"ticket",
    component:TicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
