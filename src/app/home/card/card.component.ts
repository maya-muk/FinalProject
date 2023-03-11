import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() id? :number
@Input() ArrivalStation? :string
@Input() DepatureStation? :string
@Input() DepatureTime? :string
@Input() Capacity? :number
@Input() TrainName? :string
@Input() StationName? :string
@Input() Price? : number

@Output() Send = new EventEmitter()

SendDetails(id?:number,ArrivalStation?:string,DepatureStation?:string,DepatureTime?:string,Capacity?:number,TrainName?:string,StationName?:string,Price?:number)
{
   const ride=
   {
    ids:id,
    ArrivalStations:ArrivalStation,
    DepatureStations:DepatureStation,
    DepatureTimes:DepatureTime,
    Capacitys:Capacity,
    TrainNames:TrainName,
    StationNames:StationName,
    Prices:Price
   }

   this.Send.emit(ride)
}


}
