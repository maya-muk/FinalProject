import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaypalRoutingModule } from './paypal-routing.module';
import { PayComponent } from './pay/pay.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
  declarations: [
    PayComponent
  ],
  imports: [
    CommonModule,
    PaypalRoutingModule,
    SharedModule,
    NgxPayPalModule
  ]
})
export class PaypalModule { }
