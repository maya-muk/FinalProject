import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.css']
})
export class AdminSideBarComponent {

  constructor(public adminService:AdminService){}

  User : any
  Obj : any
   async ngOnInit()
   {
    await this.adminService.GetAllUser()
      this.User = localStorage.getItem("user")
      this.User  = JSON.parse(this.User)
      this.userobj()
   }
   userobj() {
    return new Promise<void>((resolve, reject) => {
      this.Obj = this.adminService.AllUser.filter((obj: any) => obj.userid == this.User.userid)
      resolve
    })
  }
  Logout()
  {
    localStorage.clear()
    location.reload()
    
  }
}
