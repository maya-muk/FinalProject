import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(public adminService:AdminService){}

 ngOnInot()
 {
   console.log("Hi");
   this.adminService.GetAllUser()
 }
}
