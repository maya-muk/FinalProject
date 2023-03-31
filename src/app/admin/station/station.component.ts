import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GoogleMap } from '@angular/google-maps';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent {

   @ViewChild('DeleteStations') Delete: any;
   @ViewChild('CreateStations') Create : any;
   @ViewChild('UpdateStations') Update : any;

   CreateStationForm = new FormGroup
   (
     {
      stationname: new FormControl('', Validators.required),
      locations: new FormControl('', Validators.required),
      locationla: new FormControl('', Validators.required),
     }
   )

   UpdateStationForm = new FormGroup
   (
     {
      stationid: new FormControl(''),
      stationname: new FormControl('', Validators.required),
      locations: new FormControl('', Validators.required),
      locationla: new FormControl('', Validators.required),
     }
   )
   constructor(public adminService:AdminService,public dialog: MatDialog){}

   ngOnInit()
   {
     this.adminService.GetAllStation()
   }

   OpenDialog() {
    if(this.Positions.length > 0)
      this.Positions = []
    this.dialog.open(this.Create, { height: '460px', width: '800px' })
  }
  async AddStations()
  {
     await this.adminService.AddStation(this.CreateStationForm.value)
     this.adminService.GetAllStation()

  }
  Station : any
  async OpenUpdateDialog(id:number)
  {
    if(this.Positions.length > 0)
      this.Positions = []
   this.Station = await this.adminService.AllStation.filter((obj : any)=> obj.stationid == id)

    await this.UpdateStationForm.patchValue(this.Station[0])   
    this.dropMarker(this.Station[0].locations ,this.Station[0].locationla)
    this.dialog.open(this.Update,{height: '460px', width: '800px'})
  }

  async UpdateStation(){
    await this.adminService.UpdateStation(this.UpdateStationForm.value)
    this.adminService.GetAllStation()

   
  }
   ID = 0
  OpenDeleteDialog(stationid: number) {
    this.ID = stationid
    console.log(this.ID);
    
    this.dialog.open(this.Delete ,{height:'150px' ,width:'400px'})

  }
  async DeleteStation() {
    await this.adminService.DeleteStation(this.ID)
    this.adminService.GetAllStation()
  }


  center: google.maps.LatLngLiteral = {lat:31.963158,lng:35.930359};
  zoom  =4;
  maxZoom = 15;
  minZoom = 8;
  map!: GoogleMap ;
  
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    maxZoom:this.maxZoom,
    minZoom:this.minZoom,
  }

  Positions = [] as  any

  P : any
  addMarker(event: google.maps.MapMouseEvent)
  {
    if(event.latLng != null)
    {
      this.P = event.latLng.toJSON()
      this.Positions.push({
        position: {
          lat:(Number)(this.P.lat),
          lng:(Number)(this.P.lng),
        }})
    }
   
     console.log(this.Positions[0].position);
     
     if(this.dialog.getDialogById("Create"))
     {
      this.CreateStationForm.controls.locations.patchValue((String)(this.Positions[0].position.lat))
     this.CreateStationForm.controls.locationla.patchValue((String)(this.Positions[0].position.lng))
     }
     else
     {
      this.UpdateStationForm.controls.locations.patchValue((String)(this.Positions[0].position.lat))
     this.UpdateStationForm.controls.locationla.patchValue((String)(this.Positions[0].position.lng))
     }

  }


  DeleteLocations()
  {
    this.Positions = []
    this.CreateStationForm.reset()
  }

  UpdateID : any
  DeleteLocationsUpdate()
  {
    this.Positions = []
  
    this.UpdateID = this.UpdateStationForm.controls.stationid.value

    this.UpdateStationForm.reset()

    this.UpdateStationForm.controls.stationid.patchValue(this.UpdateID)

    
  }
 
  async dropMarker(lat:any,lng:any) {

      this.Positions.push({
        position: {
          lat:(Number)(lat),
          lng:(Number)(lng),
        },
        options: {
          animation: google.maps.Animation.DROP,
        },
      })

      
  }
}
