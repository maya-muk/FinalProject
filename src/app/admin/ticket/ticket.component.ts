import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {

  @ViewChild('UpdateTickets') Update: any
  TicketsStatus = ["Yes","No"]

  UpdateTicketForm = new FormGroup
  (
    {
      ticketid: new FormControl(''),
      price: new FormControl('', Validators.required),
      bookedtime: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      userrid: new FormControl('', Validators.required),
      ridesid:  new FormControl('1', Validators.required)
    }
  )
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });


  constructor(public adminService:AdminService,public dialog: MatDialog){}

  ngOnInit()
  {
    this.adminService.GetAllTickets()
  }

  onSubmit()
  {
     this.adminService.Search(this.range.value.start?.toJSON().slice(0,10),this.range.value.end?.toJSON().slice(0,10))
  }

  Tickets : any
  async OpenUpdateDialog(TickID:number)
  {
   
    this.Tickets = await this.adminService.AllTickets.filter((obj : any)=> obj.ticketid == TickID)
    this.UpdateTicketForm.patchValue(this.Tickets[0])   
    
    this.dialog.open(this.Update,{height:'160px' ,width:'380px'})
  }

  async UpdateTicket(){
    console.log(this.UpdateTicketForm.value);
    await this.adminService.UpdateTickets(this.UpdateTicketForm.value)
    this.adminService.GetAllTickets()
  }
}
