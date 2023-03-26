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


  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private toaster: ToastrService, private route: Router) { }


  ///Ride
  AllRide: any = []
  GetAllRids() {
    return new Promise<void>((resolve,reject)=>
    {
      this.http.get("https://localhost:44304/api/ride").subscribe(
        {
          next: (result) => {
            this.AllRide = result
            this.toaster.success("Success")
            resolve()
          },
          error: (err) => {
            console.log(err);
            reject()
          }
        }
      )
    })
    
  }

  CreateRide(ride: any) {
    return new Promise<void>((resolve, reject) => {
      console.log(ride);

      this.http.post("https://localhost:44304/api/Ride", ride).subscribe(
        {
          next: () => {

            this.toaster.success("Added Successfully")
            resolve()
          },
          error: (err) => {
            console.log(err);

            this.spinner.hide()
            this.toaster.error("error")

          }
        }
      )
    })
  }

  async DeleteRide(RideId: number) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.delete("https://localhost:44304/api/Ride/delete/" + RideId).subscribe(
        {
          next: () => {
            this.spinner.hide()
            this.toaster.success("Deleted Successfully")
            resolve();
          },
          error: () => {
            this.spinner.hide()
            this.toaster.error("Error")
            reject()
          }
        }
      )
    })

  }

  async UpdateRide(Ride: any) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.put("https://localhost:44304/api/Ride/", Ride).subscribe(
        {
          next: () => {
            this.spinner.hide()
            this.toaster.success("Updated Successfully")
            resolve()
          },
          error: (err) => {
            console.log(err);
            this.spinner.hide()
            this.toaster.error("Error")
            reject()
          }
        }
      )
    })
  }

  //user

  AllUser: any = []
  GetAllUser() {
    return new Promise<void>((resolve,reject)=>
    {
      this.spinner.show()
      this.http.get("https://localhost:44304/api/user").subscribe(
        {
          next: (result) => {
           
            this.AllUser = result
            this.spinner.hide()
            this.toaster.success("Success")
            resolve()
          }
          ,
          error: (err) => {
            console.log(err);
            this.toaster.error("Error")
            this.spinner.hide()
            reject()
          }
        }
      )
    })
  }


  // Tickets

  AllTickets: any = []
  GetAllTickets() {
    return new Promise<void>((resolve,reject)=>
    {
      this.http.get("https://localhost:44304/api/tickets").subscribe(
        {
          next: (result) => {
            this.AllTickets = result
            console.log("Done");
  
            this.toaster.success("Success")
            resolve()
          },
          error: (err) => {
            console.log(err);
            this.toaster.error("Error")
          }
        }
      )
    })
    
  }

  //Station
  AllStation: any = []
  GetAllStation() {
    return new Promise<void>((resolve,reject)=>
    {
      this.http.get("https://localhost:44304/api/station").subscribe(
      {
        next: (result) => {
          this.AllStation = result
          resolve
        },
        error: (err) => {
          console.log(err);
          reject
        }
      }
    )
    })
  }

  DeleteStation(stationID : number){
    return new Promise<void>((resolve,reject)=>
    {
      this.http.delete("https://localhost:44304/api/station/"+stationID).subscribe(
        {
          next:(res)=>
          {
            this.spinner.hide()
             this.toaster.success("Deleted Successfully")
             resolve
          },
          error:(err)=>{
            console.log(err);
            this.toaster.error("Error")
          }
        }
      )
    })
  }

  //Train
  AllTrain: any = []
  GetAllTrain() {
    this.http.get("https://localhost:44304/api/trains").subscribe(
      {
        next: (result) => {
          this.AllTrain = result
          this.toaster.success("Success")
        },
        error: (err) => {
          console.log(err);
           this.toaster.error("Error")
        }
      }
    )
  }
 
 CreateTrain(train: any) {
  return new Promise<void>((resolve, reject) => {
    this.spinner.show();
    this.http.post("https://localhost:44304/api/trains", train).subscribe(
      {
        next: () => 
        {
            this.spinner.hide()
            this.toaster.success("Added Successfully")
            resolve()
        },
        error: () => 
        {

          this.spinner.hide()
          this.toaster.error("error")
          
        }
      }
    )
  })
}

async DeleteTrains(TrainID : number)
  {
    return new Promise<void>((resolve,reject)=>
      {
        this.spinner.show()
        this.http.delete("https://localhost:44304/api/trains/delete/"+TrainID).subscribe(
          {
             next:()=>
             {
                 this.spinner.hide()
                 this.toaster.success("Deleted Successfully")
                 resolve();
             },
             error:()=>
             {
                this.spinner.hide()
                this.toaster.error("Error")
                reject()
             }
          }
        )
      })
    
  }

  async UpdateTrain(Train : any)
  {
    return new Promise<void>((resolve,reject)=>
    {
      this.spinner.show()
      this.http.put("https://localhost:44304/api/trains/",Train).subscribe(
        {
          next:()=>
          {
            this.spinner.hide()
            this.toaster.success("Updated Successfully")
            resolve()
          },
          error:(err)=>
          {
            console.log(err);
            console.log(Train);
            this.spinner.hide()
            this.toaster.error("Error")
            reject()
          }
        }
      )
    })
  }

  //Testimonial
  AllTestimonial: any = []
  GetAllTestimonial() {
    this.http.get("https://localhost:44304/api/Testemonial").subscribe(
      {
        next: (result) => {
          this.AllTestimonial = result
          this.toaster.success("Success")
        },
        error: (err) => {
          console.log(err);
           this.toaster.error("Error")
        }
      }
    )
  }

  async UpdateTestimonial(Testimonial : any)
  {
    return new Promise<void>((resolve,reject)=>
    {
      this.spinner.show()
      this.http.put("https://localhost:44304/api/Testemonial",Testimonial).subscribe(
        {
          next:()=>
          {
            this.spinner.hide()
            this.toaster.success("Updated Successfully")
            resolve()
          },
          error:(err)=>
          {
            console.log(err);
            console.log(Testimonial);
            this.spinner.hide()
            this.toaster.error("Error")
            reject()
          }
        }
      )
    })
  }
  //Search

  Search(DateFome: any, Dateto: any) {
    this.http.get("https://localhost:44304/api/Tickets/" + DateFome + "/" + Dateto).subscribe(
      {
        next: (res) => {
          this.AllTickets = res
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }



  //login

  async Login(user: any) {

    return new Promise<void>((resolve,reject)=>{
      console.log(user);
      const header = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
  
      const Options = {
        headers: new HttpHeaders(header)
      }
  
      this.spinner.show()
      this.http.post("https://localhost:44304/api/User", user, Options).subscribe( //token , error
        {
          next: (res: any) => {
            console.log(res); // token
            let data: any = jwt_decode(res)
            console.log(data);
  
            localStorage.setItem('token', res)
            localStorage.setItem('user', JSON.stringify(data))
            this.spinner.hide()
            if (data.Roleid == 1) {
              this.route.navigate(["Admin/dash"])
            }
            else if (data.Roleid == 2)
              this.route.navigate([""])
  
          },
          error: (err) => {
            this.spinner.hide()
            console.log(err);
  
            this.toaster.error("Invalid username or password")
          }
        }
      )
    })
   
  }
  imageName = "" // imagename

 async UploadImage(imageFile: any) {
    return new Promise<void>((resolve,reject)=>{
    this.http.post("https://localhost:44304/api/User/UploadImage", imageFile).subscribe(
      {
        next: (res: any) => { this.imageName = res.imagepath
          
          resolve },
        error: () => { }
      }
    )})
  }

  //Register
  CreateUser(User: any) {
    User.Imagepath = this.imageName
    User.Roleid = 2
    return new Promise<void>((resolve, reject) => {

      this.spinner.show()
      this.http.post("https://localhost:44304/api/User/Create", User).subscribe(
        {
          next: () => {
            this.spinner.hide()
            this.toaster.success("Added Successfully")
            resolve();
          },
          error: () => {
            this.spinner.hide()
            this.toaster.error("error")
          }
        }
      )
    })
  }
  
  
  UpdateUser(user:any){
    return new Promise<void>((resolve, reject) => {
    console.log( this.imageName)
    if(this.imageName != ""){
    user.Imagepath=this.imageName
  console.log( user)
  console.log( this.imageName)}
    
      this.http.put("https://localhost:44304/api/user",user).subscribe(
        {
          next:(result)=>{

              this.toaster.success("Updated")
              resolve
          },
          error:(err)=>{
              console.log(user);
              
              console.log(err);
              this.toaster.error("Error")
          }
        }
      )
    })

    
  }
}
