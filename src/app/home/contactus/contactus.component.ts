import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  constructor(private spinner: NgxSpinnerService,public homeService : HomeService,private tost:ToastrService,public admain:AdminService) {}


  CreateContatc = new FormGroup(
    {
      Subject :new FormControl('',Validators.required),
      Name : new FormControl('',Validators.required),
      Message : new FormControl('',Validators.required),
      Email : new FormControl('',Validators.required)
    }
  )

con:any
 async ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);

  await this.admain.GetAllcon()
    this.con=this.admain.allcontact[0]

  }

  async SendMessage()
  {
    console.log(this.CreateContatc.value);
    
     if(this.CreateContatc.value == null)
     this.tost.error("You Must Fill All Data")
     else
     {
      await this.homeService.SendMessage(this.CreateContatc.value);
      this.CreateContatc.reset()
     }
  }
}
