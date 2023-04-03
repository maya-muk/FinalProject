import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent {

  stationName: any = ""
  constructor(public admin: AdminService, private route: Router) { }
  async ngOnInit() {
    await this.admin.GetAllStation()
    this.admin.GetAllRids()

  }

  movetorides(id: any) {
    this.admin.FilterRideBystation(id);
    this.route.navigate(["/allrides"]);
  }

  Search() {
    if(this.stationName == "")
    this.admin.GetAllStation()
    else
    this.admin.GetStationByName(this.stationName)
  }

  NumOfRide : any
  SendID(id : any)
  {
    return this.admin.AllRide.filter((obj : any)=>obj.stationnid == id).length
  }

}
