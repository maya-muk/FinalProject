import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import jwt_decode from "jwt-decode";
import { NgxSpinnerService } from "ngx-spinner";

import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  

  constructor(private http:HttpClient,private spinner: NgxSpinnerService,private toaster: ToastrService , private route : Router) { }

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


Login(user :any) 
{
  console.log(user);
const header = {
  'Content-Type' : 'application/json',
  'Accept' : 'application/json'
}

const Options ={
  headers: new HttpHeaders(header)
}

  this.spinner.show()
this.http.post("https://localhost:44304/api/User",user, Options).subscribe( //token , error
  {
    next:(res:any)=>{
console.log(res); // token
let data : any = jwt_decode(res)
console.log(data);

localStorage.setItem('token' , res)
localStorage.setItem('user' ,JSON.stringify(data))
      this.spinner.hide()
if (data.Roleid == 1)
{
  this.route.navigate(["Admin/dash"])
}
else if (data.Roleid == 2)
this.route.navigate([""])

    },
    error:(err)=>{
      this.spinner.hide()
      console.log(err);
      
      this.toaster.error("Invalid username or password")
    }
  }
)
}
imageName = "" // imagename

UploadImage(imageFile : any) 
{
  this.http.post("https://localhost:44304/api/User/UploadImage",imageFile).subscribe(
    {
      next:(res:any)=>{this.imageName = res.imageName},
      error:()=>{}
    }
  )
}

CreateUser(User : any) 
{
 User.Imagepath = this.imageName 
 User.Roleid=2
return new Promise<void>((resolve, reject) => {

  this.spinner.show()
  this.http.post("https://localhost:44304/api/User/Create",User).subscribe(
    {
      next:()=>{
this.spinner.hide()
this.toaster.success("Added Successfully")
resolve();
      },
      error:()=>{
        this.spinner.hide()
this.toaster.error("error")
      }
    }
  )
})
}



}
