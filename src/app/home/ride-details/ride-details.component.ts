import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';
import { IndexComponent } from '../index/index.component';

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.css']
})
export class RideDetailsComponent {

  constructor(public adminservice:AdminService ,private rout:Router,private tost:ToastrService){}

  Ride : any
  ngOnInit(){
    
    this.Ride = this.adminservice.FilterRideByID()
  }

  Booked(id : any)
  {
    if(localStorage.getItem("user") == null)
    {
        this.tost.warning("Login first")
        this.rout.navigate(["/Auth/login"])
    }
    else
    {
         this.adminservice.RideID(id)
         this.rout.navigate(["/paypal"])
    }
  }
}
