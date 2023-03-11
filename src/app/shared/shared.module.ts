import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSideBarComponent } from './admin-side-bar/admin-side-bar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { RouterModule } from '@angular/router';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
=======
import { NgxSpinnerModule } from "ngx-spinner";



>>>>>>> c8f23aea97cb28b75fbdc4f7a6d6849ff72e0eb3

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
    RouterModule,
    
  ],
  exports:
  [
     AdminHeaderComponent,
     AdminSideBarComponent,
     AdminFooterComponent,
     HomeFooterComponent,
     HomeHeaderComponent,
<<<<<<< HEAD
     FormsModule, //formgroup
     ReactiveFormsModule, //validation
     MatInputModule
=======
     NgxSpinnerModule,
>>>>>>> c8f23aea97cb28b75fbdc4f7a6d6849ff72e0eb3
  ]
})
export class SharedModule { }
