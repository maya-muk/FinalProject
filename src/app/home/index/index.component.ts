import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { AdminService } from 'src/app/admin.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HomeService } from 'src/app/home.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

constructor(private spinner: NgxSpinnerService ,public adminService:AdminService, 
            public homeservice:HomeService,private route: Router) {}


user:any
AllObj : any
FinalObj : any

FilterRide : any
FilterTestimonial : any
async ngOnInit() 
 {
    /** spinner starts on init **/
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds **/
      this.spinner.hide();
    }, 2000);

    
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
    if(localStorage.getItem("user") !=null)
    {
      this.user = localStorage.getItem('user')
      this.user = JSON.parse(this.user)
      
      this.AllObj = this.adminService.AllUser.filter((obj:any)=> obj.userid == this.user.userid)
      console.log(this.AllObj);
      this.FinalObj = this.AllObj[0]
      console.log(this.FinalObj);
      
      console.log(this.user.userid);
      this.getLocation()
    }
  }

//Drop Marker
  Position : any = {}
  markers = []  as  any;
 async dropMarker() {

    this.Position = this.homeservice.AllStation
    for(const item of this.Position)
    {
      this.markers.push({
        id:item.stationid,
        position: {
          lat:(Number)(item.locations),
          lng:(Number)(item.locationla),
        },
        label: {
          color: 'blue',
          text: item.stationname + (this.markers.length + 1),
        },
        title: 'Click To Show The Ride For This Station ' + (this.markers.length + 1),
        info: 'Marker info ' + (this.markers.length + 1),
        options: {
          animation: google.maps.Animation.DROP,
        },
      })


    }
   console.log(this.markers);
   
  }
   
  center: google.maps.LatLngLiteral = {lat:31.963158,lng:35.930359};
  zoom  =4;
  maxZoom = 15;
  minZoom = 8;
  infoContent = ''

  map!: GoogleMap ;
  
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    maxZoom:this.maxZoom,
    minZoom:this.minZoom,
  }

  @Input() IdStation : any

  openInfo(marker:any) {
      
      this.IdStation = marker.id
      this.adminService.StationID(this.IdStation)
      console.log(this.IdStation);
      this.route.navigate(["//rideDetails"])
  }

  
/*
  openInfo(marker: MapMarker, content: string) {
    this.infoContent = content;
    this.info.open(marker)
  }*/

  
  LatUser : any
  LngUser : any
  async getLocation()
  {
     //Current Location
     await this.homeservice.getLocationService().then(resp=>{
      this.LatUser = resp.lat;
      this.LngUser = resp.lng;
      this.FinalObj.locationlo = (this.LngUser).toString()
      this.FinalObj.locationla = (this.LatUser).toString()
      console.log(this.FinalObj.locationlo);
      console.log(this.FinalObj.locationla);
      this.adminService.UpdateUser(this.FinalObj)
     })
     
  }
 






















 //search interval 

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

 onSubmit()
 {

    this.adminService.Search(this.range.value.start?.toJSON().slice(0,10),this.range.value.end?.toJSON().slice(0,10))
    
 }

  Ride = [
    {
       id:1,
       ArrivalStation:"Irbid",
       DepatureStation:"Amman",
       DepatureTime :"01/06/2023 15:15",
       Capacity:50,
       TrainName:"A",
       StationName:"AmmanStation",
       Price:10
    },
    {
      id:2,
      ArrivalStation:"Amman",
      DepatureStation:"Irbid",
      DepatureTime :"01/06/2023 22:15",
      Capacity:50,
      TrainName:"B",
      StationName:"IrbidStation",
      Price:10
   },
   {
    id:3,
    ArrivalStation:"Ajlon",
    DepatureStation:"Amman",
    DepatureTime :"01/06/2023 15:15",
    Capacity:50,
    TrainName:"A",
    StationName:"AmmanStation",
    Price:10
 },
 {
  id:4,
  ArrivalStation:"Amman",
  DepatureStation:"Ajlon",
  DepatureTime :"01/06/2023 15:50",
  Capacity:50,
  TrainName:"A",
  StationName:"AmmanStation",
  Price:10
},
{
  id:5,
  ArrivalStation:"Aqaba",
  DepatureStation:"Amman",
  DepatureTime :"01/06/2023 15:15",
  Capacity:50,
  TrainName:"A",
  StationName:"AmmanStation",
  Price:10
},
{
  id:6,
  ArrivalStation:"Salt",
  DepatureStation:"Irbid",
  DepatureTime :"01/06/2023 15:15",
  Capacity:50,
  TrainName:"B",
  StationName:"IrbidStation",
  Price:10
}

  ]




















   //map marker 
  //

  /*
  markerOptions : google.maps.MarkerOptions = {draggable: false}
  markerPositions : google.maps.LatLngLiteral[] = []

  addMarker(event:google.maps.MapMouseEvent)
  {
    if(event.latLng != null)
    this.markerPositions.push(event.latLng.toJSON())
  }
*/

/*
  zoomIn() {
    if (this.zoom < this.maxZoom) this.zoom++;
    console.log('Get Zoom',this.map.getZoom());
  }

  zoomOut() {
    if (this.zoom > this.minZoom) this.zoom--;
  }

  eventHandler(event: any ,name:string){
    console.log(event,name);
    if(name === 'mapDblclick'){
      this.dropMarker(event)
    }
  }

   // Markers
   logCenter() {
    console.log(JSON.stringify(this.map.getCenter()))
  }
  **/





////////////Reeeem Maya


  //map lat lng
 /* display : any;


  //to move map  using mapclick on html 
  moveMap(event:google.maps.MapMouseEvent)
  {
    if(event.latLng != null)
    this.center = (event.latLng.toJSON())
  }

  //to save lat and lng using map mouse move in html
  move(event:google.maps.MapMouseEvent)
  {
    if(event.latLng != null)
    this.display = (event.latLng.toJSON())
  }
*/
}

