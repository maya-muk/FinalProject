import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-managehome',
  templateUrl: './managehome.component.html',
  styleUrls: ['./managehome.component.css']
})
export class ManagehomeComponent {

  constructor(public adminService: AdminService) { }

  UpdateHome = new FormGroup(
    {
      id: new FormControl(''),
      homebackimage: new FormControl(''),
      homebackword: new FormControl(''),
      logo: new FormControl(''),
      aboutimage: new FormControl(''),
      aboutkword: new FormControl(''),
      contactimage: new FormControl(''),
      contactword: new FormControl('')
    }

  )
  Home: any
  async ngOnInit() {
    await this.adminService.GettAllHome()

    await this.ondata()
  }

  async ondata() {

    this.Home = await this.adminService.AllHome[0]

    console.log(this.Home)

    this.UpdateHome.patchValue(this.Home)

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
  UploadImage4(input: any) // <input>
  {
    console.log(input);
    console.log(input.files);
    if (input.files.length != 0) {
      let uploadedFile = input.files[0] // imagefile 
      let formData = new FormData()
      formData.append('file', uploadedFile)
      this.adminService.UploadImage4(formData)
    }

  }
  updateinfo(){
    this.adminService.UpdateHome(this.UpdateHome.value)
    this.adminService.GettAllHome()
   }
}
