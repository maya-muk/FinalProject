import { Component, Input } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { AdminService } from 'src/app/admin.service';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private spinner: NgxSpinnerService,public adminService:AdminService,public homeservice:HomeService) {}
about:any
  async ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
    await this.adminService.GetAllAbout()
this.about= await this.adminService.AllAbout[0]
    this.adminService.GetAllTrain()
    this.adminService.GetAllTestimonial()
    this.homeservice.GetStation()
    this.adminService.GetAllRids()
  }

 

}
