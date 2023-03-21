import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  constructor(private spinner: NgxSpinnerService,public homeService : HomeService) {}


  CreateContatc = new FormGroup(
    {
      ContactID:new FormControl(''),
      Subject :new FormControl('',Validators.required),
      Name : new FormControl('',Validators.required),
      Message : new FormControl('',Validators.required),
      Email : new FormControl('',Validators.required)
    }
  )


  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }

  async SendMessage()
  {
     //console.log(this.CreateContatc.value);
     await this.homeService.SendMessage(this.CreateContatc.value);
  }
}
