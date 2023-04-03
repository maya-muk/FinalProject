import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})
export class RidesComponent {

  constructor(public admin: AdminService, private rout: Router, private tost: ToastrService) { }

  rideobj: any
  ara: any
  stationname: any
  async ngOnInit() {
 
    
    this.Ride = this.admin.FilterRideByID()
    this.rideobj = localStorage.getItem('station')
    this.rideobj = JSON.parse(this.rideobj)
    console.log(this.rideobj)
    await this.admin.GetAllStation()
    await this.admin.GetAllRids()
    console.log(this.admin.stationname)
    this.stationname = this.admin.stationname[0].stationname
    console.log(this.admin.ridesforstation[0].depaturetime.transform())

  }

  Ride: any

  Booked(id: any) {
    if (localStorage.getItem("user") == null) {
      this.tost.warning("Login first")
      this.rout.navigate(["/Auth/login"])
    }
    else {
      this.admin.RideID(id)
      this.rout.navigate(["/paypal"])
    }
  }

  isToday(date: Date | string): boolean {
    return new Date().toISOString() < new Date(date).toISOString();
}
}
