import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { IndexComponent } from './index/index.component';
import { RideDetailsComponent } from './ride-details/ride-details.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
