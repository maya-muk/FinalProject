import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashComponent } from './dash/dash.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { StationComponent } from './station/station.component';
import { UserComponent } from './user/user.component';
import { TrainComponent } from './train/train.component';
import { RideComponent } from './ride/ride.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TicketComponent } from './ticket/ticket.component';
import { ManagehomeComponent } from './managehome/managehome.component';
import { ManageaboutComponent } from './manageabout/manageabout.component';
import { ManagecontactComponent } from './managecontact/managecontact.component';
import { ReportComponent } from './report/report.component';
import { ReportsComponent } from './reports/reports.component';
import { AppModule } from '../app.module';


@NgModule({
  declarations: [
    DashComponent,
    ProfileComponent,
    StationComponent,
    UserComponent,
    TrainComponent,
    RideComponent,
    TestimonialComponent,
    TicketComponent,
    ManagehomeComponent,
    ManageaboutComponent,
    ManagecontactComponent,
    ReportComponent,
    ReportsComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
