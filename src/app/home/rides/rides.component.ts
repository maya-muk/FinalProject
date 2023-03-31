import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})
export class RidesComponent {
constructor(public admin:AdminService ,private rout:Router,private tost:ToastrService){}

ara:any
stationname:any
async ngOnInit(){
  this.Ride = this.admin.FilterRideByID()
await this.admin.GetAllStation()
await this.admin.GetAllRids()
console.log(this.admin.stationname)
this.stationname=this.admin.stationname[0].stationname
console.log(this.admin.ridesforstation[0].depaturetime.transform())

}

Ride : any


Booked(id : any)
{
  if(localStorage.getItem("user") == null)
  {
      this.tost.warning("Login first")
      this.rout.navigate(["/Auth/login"])
  }
  else
  {
       this.admin.RideID(id)
       this.rout.navigate(["/paypal"])
  }
}

}
