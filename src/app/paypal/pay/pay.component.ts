import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { AdminService } from 'src/app/admin.service';
@Component({
    selector: 'app-pay',
    templateUrl: './pay.component.html',
    styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {


    constructor(public adminservice: AdminService, private datepipe: DatePipe) {
    }
    Ticket: any
    ridefprpay: any
    public payPalConfig?: IPayPalConfig;
    user: any
    currentDateTime?: any
    emailinfo: any




    async ngOnInit() {

        this.adminservice.GetAllUser();

        this.currentDateTime = this.datepipe.transform((new Date), 'yyyy/MM/dd h:mm:ss')
        console.log(new Date(this.currentDateTime))

        this.user = localStorage.getItem('user')
        this.user = JSON.parse(this.user)
        this.adminservice.EmailUser(this.user.userid)
        this.ridefprpay = await this.adminservice.ObjRide[0]
      //
        this.Ticket = {


            price: this.ridefprpay.price,
            status: "No",
            bookedtime: new Date(this.currentDateTime),
            userrid: Number(this.user.userid),
            ridesid: Number(this.ridefprpay.rideid)


        }
        this.adminservice.GetAllTrain()
        await this.adminservice.GetAllStation()
        this.adminservice.FilterRideBystation(this.ridefprpay.stationid)
       // console.log(this.adminservice.stationname[0].stationname)
    //  await  this.adminservice.FilterRideByTrain(this.ridefprpay.trainsid)
      //  console.log(this.adminservice.TrainName[0].trainname)
    //     this.adminservice.FilterRideByTrain(this.ridefprpay.trainsid)
    // let stationticket = await this.adminservice.stationname[0]
     
  // let trainnameticket = await this.adminservice.TrainName[0]
        this.emailinfo = {
            rideid: this.ridefprpay.rideid,
            arrivalstation: this.ridefprpay.arrivalstation,
            depaturestation: this.ridefprpay.depaturestation,
            depaturetime: this.ridefprpay.depaturetime,
          // trainname: this.adminservice.TrainName[0].trainname ,

          // stationname:  this.adminservice.stationname[0],
            price: this.ridefprpay.price,
            email: await this.adminservice.emailuser[0].email,
            username: this.user.username
        }
        console.log(this.emailinfo)
        console.log(this.Ticket)
        this.initConfig()



    }




    private initConfig(): void {
        this.payPalConfig = {
            currency: 'USD',
            clientId: 'ARmiuWazwMUNBbdKOvWm90WnPSQ1lLPXI9Gp2D0EBJ5ju3YqEM3aOnNp90ngWKCd1QhewYPZGW3BHWxG',
            createOrderOnClient: (data) => <ICreateOrderRequest>{
                intent: 'CAPTURE',
                purchase_units: [{
                    amount: {
                        currency_code: 'USD',
                        value: String(this.ridefprpay.price),
                        breakdown: {
                            item_total: {
                                currency_code: 'USD',
                                value: String(this.ridefprpay.price)
                            }
                        }
                    },
                    items: [{
                        name: "Ticket",
                        quantity: '1',
                        category: 'DIGITAL_GOODS',
                        unit_amount: {
                            currency_code: 'USD',
                            value: String(this.ridefprpay.price),
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
                {

                }
            },
            onClientAuthorization: (data) => {
                console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
                if (data.status == "COMPLETED") {
                    this.adminservice.CreateTicket(this.Ticket);
                    this.adminservice.sendemail(this.emailinfo);
                }
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
