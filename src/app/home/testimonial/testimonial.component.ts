import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { AdminService } from 'src/app/admin.service';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})

export class TestimonialComponent {
  constructor(private spinner: NgxSpinnerService,public adminService:AdminService) {}

  FilterTestimonial : any
  async ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);

    await this.adminService.GetAllTestimonial()
    this.FilterTestimonial = this.adminService.FilterTestimonial()
    console.log(this.FilterTestimonial);
    

  }
}
