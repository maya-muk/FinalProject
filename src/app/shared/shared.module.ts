import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSideBarComponent } from './admin-side-bar/admin-side-bar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { RouterModule } from '@angular/router';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

import { NgxSpinnerModule } from "ngx-spinner";
import { GoogleMapsModule, MapMarker ,MapInfoWindow } from '@angular/google-maps';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserSideBarComponent } from './user-side-bar/user-side-bar.component';
import {MatRadioModule} from '@angular/material/radio';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { DataTablesModule } from 'angular-datatables';
@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminSideBarComponent,
    AdminFooterComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    UserHeaderComponent,
    UserSideBarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule,
    GoogleMapsModule,
    MatDialogModule,
    DataTablesModule
  ],
  exports:
  [
     AdminHeaderComponent,
     AdminSideBarComponent,
     AdminFooterComponent,
     HomeFooterComponent,
     HomeHeaderComponent,
     FormsModule, //formgroup
     ReactiveFormsModule, //validation
     MatInputModule,
     NgxSpinnerModule, //spinner
     GoogleMapsModule, // for map
     MapMarker,// to but mark on map
     MapInfoWindow,
     UserHeaderComponent,
     UserSideBarComponent,
     MatRadioModule,
     MatDatepickerModule,
     MatNativeDateModule,
     MapInfoWindow, //map window info
     MatRadioModule, //radio button
     MatDatepickerModule, //date 
     MatNativeDateModule, //format for date
     MatDialogModule ,// dialog
     MatSelectModule,//select
     DataTablesModule,
  ]
})
export class SharedModule { }