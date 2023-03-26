import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent {

   @ViewChild('DeleteRides') Delete: any;
   constructor(public adminService:AdminService,public dialog: MatDialog){}

   ngOnInit()
   {
     this.adminService.GetAllStation()
   }

   ID = 0
  OpenDeleteDialog(stationid: number) {
    this.ID = stationid
    console.log(this.ID);
    
    this.dialog.open(this.Delete ,{height:'140px' ,width:'400px'})

  }
  async DeleteStation() {
    await this.adminService.DeleteStation(this.ID)
    this.adminService.GetAllStation()
  }
}
