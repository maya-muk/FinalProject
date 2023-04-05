import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { AdminService } from 'src/app/admin.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/home.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { createContext } from 'chart.js/dist/helpers/helpers.options';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {


  CreateContatc = new FormGroup(
    {
      Subject: new FormControl('', Validators.required),
      Name: new FormControl('', Validators.required),
      Message: new FormControl('', Validators.required),
      Email: new FormControl('', [Validators.required, Validators.email])
    }
  )
  constructor(private spinner: NgxSpinnerService, public adminService: AdminService,
    public homeservice: HomeService, private route: Router, private tost: ToastrService) { }


  user: any
  AllObj: any
  FinalObj: any
  home: any
  FilterRide: any
  FilterTestimonial: any
  async ngOnInit() {
    /** spinner starts on init **/
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds **/
      this.spinner.hide();
    }, 2000);

    await this.adminService.GettAllHome()
    this.home = this.adminService.AllHome[0]

    //Call Function From Admin Service To Display Ride 
    this.adminService.GetAllTickets()


    //call all station
    await this.homeservice.GetStation()

    this.adminService.GetAllTrain()

    await this.adminService.GetAllTestimonial()

    this.dropMarker()
    await this.adminService.GetAllUser()

    await this.adminService.GetAllRids()


    this.FilterRide = this.adminService.FilterRides()
    this.FilterTestimonial = this.adminService.FilterTestimonial()
    //CurrentLocation 
    if (localStorage.getItem("user") != null) {
      this.user = localStorage.getItem('user')
      this.user = JSON.parse(this.user)

      this.AllObj = this.adminService.AllUser.filter((obj: any) => obj.userid == this.user.userid)
      console.log(this.AllObj);
      this.FinalObj = this.AllObj[0]
      console.log(this.FinalObj);

      console.log(this.user.userid);
      this.getLocation()
    }
  }

  //Drop Marker
  Position: any = {}
  markers = [] as any;
  async dropMarker() {

    this.Position = this.homeservice.AllStation
    for (const item of this.Position) {
      this.markers.push({
        id: item.stationid,
        position: {
          lat: (Number)(item.locations),
          lng: (Number)(item.locationla),
        },
        label: {
          color: 'white',
          text: item.stationname,
        },
        title: 'Click To Show The Ride For ' + (item.stationname) + ' Station',
        info: 'Marker info ' + item.stationname,
        options: {
          animation: google.maps.Animation.DROP,
        },
      })


    }
    console.log(this.markers);

  }

  center: google.maps.LatLngLiteral = { lat: 31.963158, lng: 35.930359 };
  zoom = 4;
  maxZoom = 15;
  minZoom = 8;
  infoContent = ''

  map!: GoogleMap;

  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    maxZoom: this.maxZoom,
    minZoom: this.minZoom,
  }

  @Input() IdStation: any

  openInfo(marker: any) {

    this.IdStation = marker.id
    this.adminService.StationID(this.IdStation)
    console.log(this.IdStation);

    this.adminService.FilterRideBystation(this.IdStation);
    this.route.navigate(["/allrides"])
  }



  LatUser: any
  LngUser: any
  async getLocation() {
    //Current Location
    await this.homeservice.getLocationService().then(resp => {
      this.LatUser = resp.lat;
      this.LngUser = resp.lng;
      this.FinalObj.locationlo = (this.LngUser).toString()
      this.FinalObj.locationla = (this.LatUser).toString()
      console.log(this.FinalObj.locationlo);
      console.log(this.FinalObj.locationla);
      this.adminService.UpdateUser(this.FinalObj)
    })

  }

  movetorides(id: any) {
    this.adminService.FilterRideBystation(id);
    this.route.navigate(["/allrides"]);
  }



  //SendContactUS
  async SendMessage() {
    console.log(this.CreateContatc.value);

    if (this.CreateContatc.value == null)
      this.tost.error("You Must Fill All Data")
    else {
      await this.homeservice.SendMessage(this.CreateContatc.value);
      this.CreateContatc.reset()
    }
  }

  //Current Date
  isToday(date: Date | string): boolean {
    return new Date().toISOString() < new Date(date).toISOString();
  }
}

