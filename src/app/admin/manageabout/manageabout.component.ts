import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-manageabout',
  templateUrl: './manageabout.component.html',
  styleUrls: ['./manageabout.component.css']
})
export class ManageaboutComponent {

  constructor(public adminService: AdminService) { }
@Output() sendinfoEvent = new EventEmitter<object>();

Updateabout = new FormGroup(
{
BackSentence: new FormControl(''),
BackImage: new FormControl(''),
lowerAboutSentence: new FormControl(''),
lowerAboutImage: new FormControl(''),
ContactSentence: new FormControl(''),
ContactImage: new FormControl('')

}
  )

  
  UploadImage(input: any) // <input>
  {
    console.log(input);
    console.log(input.files);
    if (input.files.length != 0) {
      let uploadedFile = input.files[0] // imagefile 
      let formData = new FormData()
      formData.append('file', uploadedFile)
      this.adminService.UploadImage(formData)
    }

  }
  updateinfo(value: object){
    this.sendinfoEvent.emit(this.Updateabout.value);
  //  await this.adminService.UpdateAbout(this.Updateabout.value)
    // console.log("Updated");
  }
}
