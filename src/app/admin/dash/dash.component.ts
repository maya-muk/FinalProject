import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {

  constructor(public adminService:AdminService){}

  NumberOfRegisterd = ""
  User : any
  ngOnInit()
  {
     this.User = this.adminService.AllUser
     
  }

  
}
