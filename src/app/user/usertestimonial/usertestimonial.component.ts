import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    Opinion :new FormControl('')
  }
)

async updatetest(){
   await this.adminService.UpdateTestimonial(this.update.value)
}
}
