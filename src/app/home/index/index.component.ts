import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  constructor(private spinner: NgxSpinnerService) {}

 ngOnInit() {
    /** spinner starts on init **/
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds **/
      this.spinner.hide();
    }, 3000);

  }

  display : any;
  center: google.maps.LatLngLiteral = {lat:24,lng:12};
  zoom  =4;

  moveMap(event:google.maps.MapMouseEvent)
  {
    if(event.latLng != null)
    this.center = (event.latLng.toJSON())
  }

  move(event:google.maps.MapMouseEvent)
  {
    if(event.latLng != null)
    this.display = (event.latLng.toJSON())
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

}
