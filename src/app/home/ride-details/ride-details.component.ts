import { Component } from '@angular/core';

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.css']
})
export class RideDetailsComponent {

  ride =
  [
   {
    ArrivalStation :"",
    DepatureStation:"",
     DepatureTime :"",
     Capacity :1,
    TrainName :"",
    StationName :"",
     Price : 1,
   }
  ]
   

  Save(ride:any)
  {
    console.log(ride);
    
  }

 



}
