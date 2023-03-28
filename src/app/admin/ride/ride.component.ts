import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.css']
})
export class RideComponent {

  @ViewChild('CreateRides') Create: any;
  @ViewChild('DeleteRides') Delete: any;
  @ViewChild('UpdateRides') Update: any

  RideStatus = ["Yes","No"]

  CreateRideForm = new FormGroup
    (
      {
        arrivalstation: new FormControl('', Validators.required),
        depaturestation: new FormControl('', Validators.required),
        depaturetime: new FormControl('', Validators.required),
        capacityy: new FormControl('', Validators.required),
        status: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
        trainsid: new FormControl('', Validators.required),
        stationnid: new FormControl('', Validators.required)
      }
    )

    UpdateRideForm = new FormGroup
    (
      {
        rideid: new FormControl(''),
        arrivalstation: new FormControl('', Validators.required),
        depaturestation: new FormControl('', Validators.required),
        depaturetime: new FormControl('', Validators.required),
        capacityy: new FormControl('', Validators.required),
        status: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
        trainsid: new FormControl('', Validators.required),
        stationnid: new FormControl('', Validators.required)
      }
    )

  constructor(public adminService: AdminService, public dialog: MatDialog) { }

  ngOnInit() {
    this.adminService.GetAllRids();
    this.adminService.GetAllStation();
    this.adminService.GetAllTrain();
  }

  async CreateRide() {
    await this.adminService.CreateRide(this.CreateRideForm.value)
    this.adminService.GetAllRids()
  }

  OpenDialog() {
    this.dialog.open(this.Create, { height: '460px', width: '800px' })
  }
  

  ID = 0
  OpenDeleteDialog(rideId: number) {
    this.ID = rideId
    console.log(this.ID);
    
    this.dialog.open(this.Delete ,{height:'140px' ,width:'400px'})

  }
  async DeleteRide() {
    await this.adminService.DeleteRide(this.ID)
    this.adminService.GetAllRids()
  }

  Ride : any
  rideobj :any 
  async OpenUpdateDialog(rideId:number)
  {
   this.Ride = await this.adminService.AllRide.filter((obj : any)=> obj.rideid == rideId)
   this.rideobj=this.Ride[0]


    this.UpdateRideForm.patchValue(this.rideobj)   
    console.log(this.rideobj);
    this.dialog.open(this.Update,{height: '460px', width: '800px'})
  }

  async UpdateRide(){
    await this.adminService.UpdateRide(this.UpdateRideForm.value)
    this.adminService.GetAllRids()
  }
}
