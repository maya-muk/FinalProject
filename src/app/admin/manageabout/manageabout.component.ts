import { Component} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-manageabout',
  templateUrl: './manageabout.component.html',
  styleUrls: ['./manageabout.component.css']
})
export class ManageaboutComponent {

  constructor(public adminService: AdminService) { }
  
Updateabout = new FormGroup(
  {
  aboutid: new FormControl(''),
  aboutbackword: new FormControl(''),
  aboutbackimage: new FormControl(''),
  aboutword: new FormControl(''),
  aboutimage: new FormControl(''),
  contactword: new FormControl(''),
  contactimage: new FormControl('')

  }
  
  )
  about:any
  async ngOnInit(){
    await this.adminService.GetAllAbout()
    
    await this.ondata()
  }
  
async ondata(){

  this.about =  this.adminService.AllAbout[0]
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
