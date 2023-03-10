import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSideBarComponent } from './admin-side-bar/admin-side-bar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { RouterModule } from '@angular/router';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';


@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminSideBarComponent,
    AdminFooterComponent,
    HomeHeaderComponent,
    HomeFooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule
  ],
  exports:
  [
     AdminHeaderComponent,
     AdminSideBarComponent,
     AdminFooterComponent,
     HomeFooterComponent,
     HomeHeaderComponent
  ]
})
export class SharedModule { }
