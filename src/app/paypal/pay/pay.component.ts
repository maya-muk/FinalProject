import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { AdminService } from 'src/app/admin.service';
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent  implements OnInit{


constructor(public adminservice:AdminService){}
ngOnInit() {
  this.initConfig()

 console.log( this.adminservice.ObjRide[0]);
 
}
public payPalConfig ?: IPayPalConfig;

private initConfig(): void {
  this.payPalConfig = {
      currency: 'EUR',
      clientId: 'ARmiuWazwMUNBbdKOvWm90WnPSQ1lLPXI9Gp2D0EBJ5ju3YqEM3aOnNp90ngWKCd1QhewYPZGW3BHWxG',
      createOrderOnClient: (data) => < ICreateOrderRequest> {
          intent: 'CAPTURE',
          purchase_units: [{
              amount: {
                  currency_code: 'EUR',
                  value: '9.99',
                  breakdown: {
                      item_total: {
                          currency_code: 'EUR',
                          value: '9.99'
                      }
                  }
              },
              items: [{
                  name: 'Enterprise Subscription',
                  quantity: '1',
                  category: 'DIGITAL_GOODS',
                  unit_amount: {
                      currency_code: 'EUR',
                      value: '9.99',
                  },
              }]
          }]
      },
      advanced: {
          commit: 'true'
      },
      style: {
          label: 'paypal',
          layout: 'vertical'
      },
      onApprove: (data, actions) => {
          console.log('onApprove - transaction was approved, but not authorized', data, actions);
          actions.order.get().then((details: any) => {
              console.log('onApprove - you can get full order details inside onApprove: ', details);
          });

      },
      onClientAuthorization: (data) => {
          console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
          
      },
      onCancel: (data, actions) => {
          console.log('OnCancel', data, actions);
          

      },
      onError: err => {
          console.log('OnError', err);
         
      },
      onClick: (data, actions) => {
          console.log('onClick', data, actions);
        
      }
  };
}
}
