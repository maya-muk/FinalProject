import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.css']
})
export class RideComponent {

  
  constructor(public adminService : AdminService) {}

  ngOnInit()
  {
    this.adminService.GetAllRids();
  }
}
