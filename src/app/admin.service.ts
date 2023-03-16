import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  AllRide : any =[]
  GetAllRids()
  {
    this.http.get("https://localhost:44304/api/ride").subscribe(
     {
      next: (result)=>
      {
            this.AllRide = result
            console.log("Done");
            
            //this.tost.success("Done")
      },
      error: (err)=>
      {
            console.log(err);  
            //this.tost.error("Done")
      }
     }
    )
  }

  // 

  AllTickets : any =[]
  GetAllTickets()
  {
    this.http.get("https://localhost:44304/api/tickets").subscribe(
     {
      next: (result)=>
      {
            this.AllTickets = result
            console.log("Done");
            
            //this.tost.success("Done")
      },
      error: (err)=>
      {
            console.log(err);  
            //this.tost.error("Done")
      }
     }
    )
  }



  Search(DateFome:any,Dateto:any)
{
  this.http.get("https://localhost:44304/api/Tickets/"+DateFome+"/"+Dateto).subscribe(
    {
        next:(res)=>
        {
          this.AllTickets=res
        },
        error:(err)=>
        {
          console.log(err)
         }
    }
  )
}


}
