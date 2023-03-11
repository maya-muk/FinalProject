import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

@Input() ArrivalStation? :string
@Input() DepatureStation? :string
@Input() DepatureTime? :string
@Input() Capacity? :number
@Input() TrainName? :string
@Input() StationName? :string
@Input() Price? : number

@Output() Send = new EventEmitter()

SendDetails(ArrivalStation?:string,DepatureStation?:string,DepatureTime?:string,Capacity?:number,TrainName?:string,StationName?:string,Price?:number)
{
   const ride=
   {
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
