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


Updatecon = new FormGroup(
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
    await this.adminService.GetAllcon()
    
    await this.ondata()
  }
  
async ondata(){

  this.about = await this.adminService.allcontact[0]
 
   console.log(this.about)

   this.Updatecon.patchValue(this.about)
   
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
  
 
  updateinfo(){
   this.adminService.UpdateContact(this.Updatecon.value)
   this.adminService.GetAllcon()
  }

}


