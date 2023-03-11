import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { IndexComponent } from './index/index.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

const routes: Routes = [
  {
    path:"main",
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
