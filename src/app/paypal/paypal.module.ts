import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaypalRoutingModule } from './paypal-routing.module';
import { PayComponent } from './pay/pay.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PayComponent
  ],
  imports: [
    CommonModule,
    PaypalRoutingModule,
    SharedModule
  ]
})
export class PaypalModule { }
