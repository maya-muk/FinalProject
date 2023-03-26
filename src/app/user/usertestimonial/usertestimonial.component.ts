import { Component } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';
@Component({
  selector: 'app-usertestimonial',
  templateUrl: './usertestimonial.component.html',
  styleUrls: ['./usertestimonial.component.css']
})
export class UsertestimonialComponent {
  constructor(public adminService:AdminService) {}

update = new FormGroup(
  {
    userid :new FormControl(''),
    status: new FormControl('Yes'),
    opinion :new FormControl('',[Validators.required])
  }
  
  )
  FinalObj :any
  AllObj : any
  user:any
  async ngOnInit(){
     await this.adminService.GetAllUser()
    
      this.user= localStorage.getItem('user')
      this.user = JSON.parse(this.user)
      
      this.update.patchValue(this.user)
      

  }

 async updatetest(){
 await this.adminService.CreateTestimonial(this.update.value)
  
console.log(this.update.value)
}
}
