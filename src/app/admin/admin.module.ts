import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashComponent } from './dash/dash.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { StationComponent } from './station/station.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    DashComponent,
    ProfileComponent,
    StationComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
