import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {

  @ViewChild('UpdateTestimonial') Update: any

  TetimonialStatus = ["Yes","No"]

  UpdateTetimonialForm = new FormGroup
  (
    {
      id: new FormControl(''),
      opinion: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      userid: new FormControl('', Validators.required),
    }
  )
  
  constructor(public adminService:AdminService , public dialog: MatDialog){}

 
  ngOnInit()
  {
    this.adminService.GetAllTestimonial()
  }


  Testimonial : any
  async OpenUpdateDialog(tesID:number)
  {
   // console.log(rideId);
   this.Testimonial = await this.adminService.AllTestimonial.filter((obj : any)=> obj.id == tesID)
    this.UpdateTetimonialForm.patchValue(this.Testimonial)   
    //console.log(this.Ride);
    //console.log(this.UpdateRideForm.value);
    
    this.dialog.open(this.Update,{height:'180px' ,width:'400px'})
  }

  async UpdateTestimonial(){
    await this.adminService.UpdateTestimonial(this.UpdateTetimonialForm.value)
    this.adminService.GetAllTestimonial()
  }
}


