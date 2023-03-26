import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {

  constructor(public adminService: AdminService) { }

  User: any
  Ride: any
  Station: any
  Tickets: any
  async ngOnInit() {
    
    this.adminService.GetAllUser()
    this.adminService.GetAllRids()
    this.adminService.GetAllTickets()
    this.adminService.GetAllStation()
    
  }


}
