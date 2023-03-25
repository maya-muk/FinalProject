import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { AdminService } from 'src/app/admin.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HomeService } from 'src/app/home.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

constructor(private spinner: NgxSpinnerService ,public adminService:AdminService, 
            public homeservice:HomeService) {}

            A ?: any 

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

  
    this.dropMarker()

   
    //CurrentLocation 
    if(localStorage.getItem("user") !=null)
    {
      this.A =localStorage.getItem("user")
      console.log(this.A);
      this.getLocation()
    }
  

      //for map
   /* navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })*/
  }

//Drop Marker
  Position : any = {}
  markers = []  as  any;
 async dropMarker() {

    this.Position = this.homeservice.AllStation
    for(const item of this.Position)
    {
      this.markers.push({
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

  map!: GoogleMap;
  
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    maxZoom:this.maxZoom,
    minZoom:this.minZoom,
  }
  info!: MapInfoWindow;
  openInfo(marker: MapMarker, content: string) {
    this.infoContent = content;
    this.info.open(marker)
  }


  LatUser : any
  LngUser : any
  async getLocation()
  {
     //Current Location
     await this.homeservice.getLocationService().then(resp=>{
      this.LatUser = resp.lat;
      this.LngUser = resp.lng;
      console.log(this.LatUser);
      console.log(this.LngUser);
      
     })
     
  }
 




  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
 //search interval 
 onSubmit()
 {

    this.adminService.Search(this.range.value.start?.toJSON().slice(0,10),this.range.value.end?.toJSON().slice(0,10))
    
 }





















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



  // maxZoom = 15;
  // minZoom = 8;

  // options: google.maps.MapOptions = {
  //   zoomControl: false,
  //   scrollwheel: false,
  //   disableDoubleClickZoom: true,
  //   mapTypeId: 'hybrid',
  //   maxZoom:this.maxZoom,
  //   minZoom:this.minZoom,
  // }


 

  zoomIn() {
    if (this.zoom < this.maxZoom) this.zoom++;
    console.log('Get Zoom',this.map.getZoom());
  }

  zoomOut() {
    if (this.zoom > this.minZoom) this.zoom--;
  }

  /*eventHandler(event: any ,name:string){
    console.log(event,name);
    if(name === 'mapDblclick'){
      this.dropMarker(event)
    }
  }*/

   // Markers
   logCenter() {
    console.log(JSON.stringify(this.map.getCenter()))
  }
  

 






////////////Reeeem Maya


  //map lat lng
  display : any;


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



}
