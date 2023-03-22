import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestimonialComponent } from '../admin/testimonial/testimonial.component';
import { ProfileComponent } from './profile/profile.component';
import { UsertestimonialComponent } from './usertestimonial/usertestimonial.component';

const routes: Routes = [
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"testimonial",
    component:UsertestimonialComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
