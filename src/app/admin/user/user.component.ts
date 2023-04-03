import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

   UserName : any = ""

  constructor(public adminService:AdminService){}

 ngOnInit()
 {
   this.adminService.GetAllUser()
 }

 SearchByName()
 {
   this.adminService.FilterUserByName(this.UserName) 
 }
}
