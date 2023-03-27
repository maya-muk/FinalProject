import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { UsertestimonialComponent } from './usertestimonial/usertestimonial.component';
import { TicketsComponent } from './tickets/tickets.component';




@NgModule({
  declarations: [
  
    ProfileComponent,
       UsertestimonialComponent,
       TicketsComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
