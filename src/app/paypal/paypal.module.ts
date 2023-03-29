import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { PaypalRoutingModule } from './paypal-routing.module';
import { PayComponent } from './pay/pay.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
  declarations: [
    PayComponent
  ],
  providers: [DatePipe],
  imports: [
    CommonModule,
    PaypalRoutingModule,
    SharedModule,
    NgxPayPalModule
  ]
})
export class PaypalModule { }
