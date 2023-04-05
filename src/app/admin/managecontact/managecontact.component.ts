import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-managecontact',
  templateUrl: './managecontact.component.html',
  styleUrls: ['./managecontact.component.css']
})
export class ManagecontactComponent {


  constructor(public adminService: AdminService) { }


Updateabout = new FormGroup(
  {
    contactdyid: new FormControl(''),
    contactbackimage: new FormControl(''),
    contactbackword: new FormControl(''),
    contactformword: new FormControl(''),
    contactformemail: new FormControl(''),
    contactformphone: new FormControl(''),
    contactformadress: new FormControl('')

}
 
  
  )
  about:any
  async ngOnInit(){
    await this.adminService.GetAllAbout()
    
    await this.ondata()
  }
  
async ondata(){

  this.about = await this.adminService.AllAbout[0]
  this.about=this.about[0]
  console.log(this.about)

   this.Updateabout.patchValue(this.adminService.AllAbout[0])
   console.log(this.adminService.AllAbout[0])
 }

  
  UploadImage1(input: any) // <input>
  {
    console.log(input);
    console.log(input.files);
    if (input.files.length != 0) {
      let uploadedFile = input.files[0] // imagefile 
      let formData = new FormData()
      formData.append('file', uploadedFile)
      this.adminService.UploadImage1(formData)
    }

  }
  
  UploadImage2(input: any) // <input>
  {
    console.log(input);
    console.log(input.files);
    if (input.files.length != 0) {
      let uploadedFile = input.files[0] // imagefile 
      let formData = new FormData()
      formData.append('file', uploadedFile)
      this.adminService.UploadImage2(formData)
    }

  }
  
  UploadImage3(input: any) // <input>
  {
    console.log(input);
    console.log(input.files);
    if (input.files.length != 0) {
      let uploadedFile = input.files[0] // imagefile 
      let formData = new FormData()
      formData.append('file', uploadedFile)
      this.adminService.UploadImage3(formData)
    }

  }
 
  updateinfo(){
   this.adminService.UpdateAbout(this.Updateabout.value)
   this.adminService.GetAllAbout()
  }

}


