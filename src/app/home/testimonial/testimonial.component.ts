import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  constructor(private spinner: NgxSpinnerService,public homeservice:HomeService) {}

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);

this.homeservice.gettestimonial();


  }
}
