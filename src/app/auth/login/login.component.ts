import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { AdminService } from 'src/app/admin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

LoginForm = new FormGroup(
{
    Username: new FormControl('',[Validators.required ]),
    Password : new FormControl('',[Validators.required , Validators.minLength(3)])
}

)
RegisterForm = new FormGroup(
  {
    Username : new FormControl('',[Validators.required]),
    Email: new FormControl('',[Validators.required , Validators.email]),
    Password : new FormControl('',[Validators.required , Validators.minLength(5)]),
    Firstname : new FormControl('',[Validators.required]),
    Lastname : new FormControl('',[Validators.required])
  }
)


GetData()
{
const user = this.LoginForm.value;
console.log(user);
}

constructor(private spinner: NgxSpinnerService,public adminService: AdminService) {}
ngOnInit() {
  /** spinner starts on init */
  this.spinner.show();

  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
  }, 3000);
}
login(){
  this.adminService.Login(this.LoginForm.value)

}

UploadImage(input: any) // <input>
{
console.log(input);
console.log(input.files);
if(input.files.length !=0 )
{
let uploadedFile = input.files[0] // imagefile 
let formData = new FormData()
formData.append('file' , uploadedFile)
this.adminService.UploadImage(formData)
}

}
async createUser(){
await this.adminService.CreateUser(this.RegisterForm.value)

}
}
