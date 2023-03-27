import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestimonialComponent } from '../admin/testimonial/testimonial.component';
import { ProfileComponent } from './profile/profile.component';
import { TicketsComponent } from './tickets/tickets.component';
import { UsertestimonialComponent } from './usertestimonial/usertestimonial.component';

const routes: Routes = [
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"testimonial",
    component:UsertestimonialComponent
  },
  {
    path:"tickets",
    component:TicketsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
