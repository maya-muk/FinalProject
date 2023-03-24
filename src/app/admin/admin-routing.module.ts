import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { ProfileComponent } from './profile/profile.component';
import { RideComponent } from './ride/ride.component';
import { StationComponent } from './station/station.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TicketComponent } from './ticket/ticket.component';
import { TrainComponent } from './train/train.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:"dash",
    component:DashComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"Station",
    component:StationComponent
  }
  ,
  {
    path:"User",
    component:UserComponent
  }
  ,
  {
    path:"Train",
    component:TrainComponent
  }
  ,
  {
    path:"Ride",
    component:RideComponent  
  }
  ,
  {
    path:"Testimonial",
    component:TestimonialComponent  
  }
  ,
  {
    path:"Ticket",
    component:TicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
