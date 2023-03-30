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

   CreateStationForm = new FormGroup
   (
     {
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
    this.dialog.open(this.Create, { height: '460px', width: '800px' })
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

  Positions = []  as  any
  addMarker(event: google.maps.MapMouseEvent)
  {
    if(event.latLng != null)
    this.Positions.push(event.latLng.toJSON())
     console.log(this.Positions);
     
     this.CreateStationForm.controls.locations.patchValue((String)(this.Positions[0].lat))
     this.CreateStationForm.controls.locationla.patchValue((String)(this.Positions[0].lng))
  }
  async AddStations()
  {
     await this.adminService.AddStation(this.CreateStationForm.value)
     this.adminService.GetAllStation()

  }

  DeleteLocations()
  {
    this.Positions = []
    this.CreateStationForm.reset()
  }
}
