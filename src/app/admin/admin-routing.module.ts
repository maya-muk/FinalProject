import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { ProfileComponent } from './profile/profile.component';
import { StationComponent } from './station/station.component';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
