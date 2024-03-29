import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterState } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(public adminService:AdminService,private route: Router
   ) {}

  updateform = new FormGroup(
    {
      userid: new FormControl(''),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      imagepath: new FormControl(''),

    }

  )
  numofticket:any
  FinalObj: any
  AllObj: any
  user: any
  theuseritem:any
  async ngOnInit() {
    await this.adminService.GetAllUser()
    await this.adminService.GetAllTickets()
   
//console.log(this.adminService.AllTickets.filter((obj: any)=> obj.userrid == this.user.userid))

    this.user = localStorage.getItem('user')
    this.user = JSON.parse(this.user)
    // this.numofticket=  this.adminService.AllTickets.filter((obj: any)=> obj.userid == 67).length
    // console.log(this.numofticket)
    
    this.theuseritem = localStorage.getItem('ticket')
    this.theuseritem = JSON.parse(this.theuseritem)
    
    this.numofticket=this.theuseritem.length
    
    
    //this.numofticket=this.numofticket.length;
    await this.userobj()
    

  }//on 


  userobj() {
    return new Promise<void>((resolve, reject) => {
      this.AllObj = this.adminService.AllUser.filter((obj: any) => obj.userid == this.user.userid)
      this.FinalObj = this.AllObj[0]
      this.updateform.patchValue(this.FinalObj)
      resolve
    })
  }

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

 updateinfo(){
   this.adminService.UpdateUser(this.updateform.value)
  location.reload()
 
  
}

}




