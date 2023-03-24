import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {

  
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(public adminService:AdminService){}

  ngOnInit()
  {
    this.adminService.GetAllTickets()
  }

  onSubmit()
  {
 
     this.adminService.Search(this.range.value.start?.toJSON().slice(0,10),this.range.value.end?.toJSON().slice(0,10))
     
  }
}
