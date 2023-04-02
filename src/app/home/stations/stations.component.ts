import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent {

  stationName : any = ""
  constructor(public admin: AdminService,private route :Router){}
  async ngOnInit(){
   await  this.admin.GetAllStation()
  }

   movetorides(id :any){
    this.admin.FilterRideBystation(id);
    this.route.navigate(["/allrides"]);
  }

  Search()
{
  console.log(this.stationName);
  this.admin.GetStationByName(this.stationName)
}



}
