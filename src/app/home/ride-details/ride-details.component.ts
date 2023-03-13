import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndexComponent } from '../index/index.component';

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.css']
})
export class RideDetailsComponent {

  //constructor( ){}
/**
 private activatedrout : ActivatedRoute = new ActivatedRoute
 private index :IndexComponent = new IndexComponent()


  ridee:any;
  rideid:number = 1;

ngOnInit():void{
  this.rideid = Number(this.activatedrout.snapshot.params['id']);
  this.ridee = this.index.Ride.find(x=>x.id = this.rideid)

 
  
}


  ss():void{
    console.log(this.rideid);
  }
 */



  ride:any;
  getdata()
  {
    localStorage.getItem('ArrivalStations');
    const data ={
      ArrivalStations : localStorage.getItem('ArrivalStations')
    }
    this.ride = data;
    debugger
  }














  
  qparam:any
  constructor(private route:ActivatedRoute){}

  ngoninit()
  {
    this.route.queryParams.subscribe(param =>{
     console.log(param);
     
    })
  }

}
