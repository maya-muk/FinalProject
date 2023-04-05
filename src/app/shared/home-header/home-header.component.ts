import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent {

  constructor(public rout:Router){}
  id : any
  ngOnInit()
  {
    if(localStorage.getItem("user") != null)
     {
      this.id = localStorage.getItem("user")
      this.id = JSON.parse(this.id)
     }
      
  }
  Logout()
  {
    localStorage.clear()
    location.reload()
    this.ngOnInit()
  }
}
