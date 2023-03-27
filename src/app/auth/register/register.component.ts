import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  RegisterForm = new FormGroup(
    {
      Username : new FormControl('',[Validators.required]),
      Email: new FormControl('',[Validators.required , Validators.email]),
      Password : new FormControl('',[Validators.required , Validators.minLength(5),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      Firstname : new FormControl('',[Validators.required]),
      Lastname : new FormControl('',[Validators.required])
    }
  )
  
  
  
  constructor(private spinner: NgxSpinnerService,public adminService: AdminService,public rout:Router) {}
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
  
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
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
  this.rout.navigate(["Auth/login"])
  }
}
