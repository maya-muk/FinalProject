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
    return new Promise<void>((resolve, reject) => {
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
    return new Promise<void>((resolve, reject) => {
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
  theuseritem: any
  numofticketuser: any = []
  AllTickets: any = []
  GetAllTickets() {
    return new Promise<void>((resolve, reject) => {
      this.http.get("https://localhost:44304/api/tickets").subscribe(
        {
          next: (result) => {
            this.AllTickets = result
            console.log("Done");

            this.theuseritem = localStorage.getItem('user')
            this.theuseritem = JSON.parse(this.theuseritem)
            console.log(Number(this.theuseritem.userid));
            this.numofticketuser = this.AllTickets.filter((obj: any) => obj.userrid == Number(this.theuseritem.userid))

            localStorage.setItem('ticket', this.numofticketuser)
            localStorage.setItem('ticket', JSON.stringify(this.numofticketuser))
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

  UpdateTickets(Tickets: any) {
    return new Promise<void>((resolve, reject) => {
      this.http.put("https://localhost:44304/api/tickets", Tickets).subscribe(
        {
          next: (result) => {
            this.toaster.success("Updated Successfully")
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

  //Report

  Reports: any = []
  ReturnReport() {
    return new Promise<void>((resolve, reject) => {
      this.http.get("https://localhost:44304/api/tickets/reports").subscribe(
        {
          next: (result) => {
            this.Reports = result
            this.toaster.success("Successfully")
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

  SearchReport(DateFome: any, Dateto: any) {
    return new Promise<void>((resolve, reject) => {
      this.http.get("https://localhost:44304/api/Tickets/Report/" + DateFome + "/" + Dateto).subscribe(
        {
          next: (res) => {
            this.Reports = res
            resolve()
          },
          error: (err) => {
            console.log(err)
            reject()
          }
        }
      )
    })
  }

  //Station
  AllStation: any = []
  GetAllStation() {
    return new Promise<void>((resolve, reject) => {
      this.http.get("https://localhost:44304/api/station").subscribe(
        {
          next: (result) => {
            this.AllStation = result
            this.toaster.success("Success")
            resolve()
          },
          error: (err) => {
            console.log(err);
            reject
          }
        }
      )
    })
  }

  DeleteStation(stationID: number) {
    return new Promise<void>((resolve, reject) => {
      this.http.delete("https://localhost:44304/api/station/" + stationID).subscribe(
        {
          next: (res) => {
            this.spinner.hide()
            this.toaster.success("Deleted Successfully")
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

  AddStation(station: any) {
    return new Promise<void>((resolve, reject) => {
      this.http.post("https://localhost:44304/api/station/", station).subscribe(
        {
          next: () => {
            this.toaster.success("Add Successfully")
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

  UpdateStation(station: any) {
    return new Promise<void>((resolve, reject) => {
      this.http.put("https://localhost:44304/api/station/Update/", station).subscribe(
        {
          next: () => {
            this.toaster.success("Update Successfully")
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

  // Search By Name
  GetStationByName(stationName: any) {
    return new Promise<void>((resolve, reject) => {
      this.http.get("https://localhost:44304/api/station/ByName/" + stationName).subscribe(
        {
          next: (result) => {
            this.AllStation = result
            this.toaster.success("Success")
          },
          error: (err) => {
            console.log(err);
            this.toaster.error("You must enter data first")
          }
        }
      )
    })
  }

  //Train
  AllTrain: any = []
  GetAllTrain() {
    return new Promise<void>((resolve, reject) => {
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
    })
  }

  CreateTrain(train: any) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show();
      this.http.post("https://localhost:44304/api/trains", train).subscribe(
        {
          next: () => {
            this.spinner.hide()
            this.toaster.success("Added Successfully")
            resolve()
          },
          error: () => {

            this.spinner.hide()
            this.toaster.error("error")

          }
        }
      )
    })
  }

  DeleteTrains(TrainID: number) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.delete("https://localhost:44304/api/trains/delete/" + TrainID).subscribe(
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

  UpdateTrain(Train: any) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.put("https://localhost:44304/api/trains/", Train).subscribe(
        {
          next: () => {
            this.spinner.hide()
            this.toaster.success("Updated Successfully")
            resolve()
          },
          error: (err) => {
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
    return new Promise<void>((resolve, reject) => {
      this.http.get("https://localhost:44304/api/Testemonial/All").subscribe(
        {
          next: (result) => {


            this.AllTestimonial = result
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

  async UpdateTestimonial(Testimonial: any) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.put("https://localhost:44304/api/Testemonial", Testimonial).subscribe(
        {
          next: () => {
            this.spinner.hide()
            this.toaster.success("Updated Successfully")
            resolve()
          },
          error: (err) => {
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

  //create test userdashboard
  CreateTestimonial(Testimonial: any) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.post("https://localhost:44304/api/Testemonial", Testimonial).subscribe(
        {
          next: () => {
            this.spinner.hide()
            this.toaster.success("Thanks for your opinion")
            resolve()
          },
          error: (err) => {
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

    return new Promise<void>((resolve, reject) => {
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
    return new Promise<void>((resolve, reject) => {
      this.http.post("https://localhost:44304/api/User/UploadImage", imageFile).subscribe(
        {
          next: (res: any) => {
            this.imageName = res.imagepath

            resolve
          },
          error: () => { }
        }
      )
    })
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
            this.route.navigate([""])
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


  UpdateUser(user: any) {
    return new Promise<void>((resolve, reject) => {
      if (this.imageName != "") {
        user.Imagepath = this.imageName
      }

      this.http.put("https://localhost:44304/api/user", user).subscribe(
        {
          next: (result) => {

            this.toaster.success("Updated")
            resolve
          },
          error: (err) => {
            console.log(user);

            console.log(err);
            this.toaster.error("Error")
          }
        }
      )
    })


  }


  //manage about us page
  UpdateAbout(aboutinfo: any) {
    return new Promise<void>((resolve, reject) => {
      console.log(this.imageName)
      if (this.imageName != "") {
        aboutinfo.Imagepath = this.imageName
      }
      this.http.put("https://localhost:44304/api/Dynamic", aboutinfo).subscribe(
        {
          next: (result) => {
            this.toaster.success("Updated")
            resolve()
          },
          error: (err) => {
            console.log(aboutinfo);

            console.log(err);
            this.toaster.error("Error")
          }


        }
      )

    })
  }



  EmailUser(id: any) {
    return this.AllUser.filter((obj: any) => obj.userid == id)
  }
  FilterTestimonial() {

    return this.AllTestimonial.filter((obj: any) => obj.status == "Yes")
  }

  FilterRides() {
    return this.AllRide.filter((obj: any) => obj.status == "Yes")
  }

  idstation: any
  StationID(ID: any) {
    this.idstation = ID
  }
  FilterRideByID() {
    return this.AllRide.filter((obj: any) => obj.stationnid == this.idstation)
  }

  ridesforstation1: any
  ridesforstation: any
  stationname: any
  async FilterRideBystation(id: any) {
    this.ridesforstation1 = await this.AllRide.filter((obj: any) => obj.stationnid == id)
    this.stationname = await this.AllStation.filter((obj: any) => obj.stationid == id)
    localStorage.setItem('station', JSON.stringify(this.ridesforstation1))

    this.ridesforstation = localStorage.getItem('station')
    this.ridesforstation = JSON.parse(this.ridesforstation)
  }

  idRide: any
  ObjRide: any
  async RideID(ID: any) {
    this.idRide = await ID;
    this.ObjRide = this.AllRide.filter((obj: any) => obj.rideid == this.idRide)
  }

  CreateTicket(Ticket: any) {
    console.log(Ticket);
    this.spinner.show()
    this.http.post("https://localhost:44304/api/Tickets", Ticket).subscribe(
      {
        next: () => {
          this.spinner.hide()
          this.toaster.success("Pay Successfully And Ticket Booked")
        },
        error: (err) => {
          console.log(err);

          this.spinner.hide()
          this.toaster.error("Error")
        }
      }
    )
  }

  sendemail(emailobj: any) {
    console.log(emailobj);
    this.spinner.show()
    this.http.post("https://localhost:44304/api/Mail", emailobj).subscribe(
      {
        next: () => {
          this.spinner.hide()
          this.toaster.success("email sent")
        },
        error: (err) => {
          console.log(err);

          this.spinner.hide()
          this.toaster.error("Error")
        }
      }
    )
  }

   FilterUserByName(Name: any) {
    console.log(Name);
    this.AllUser = this.AllUser.filter((obj: any) => obj.username == Name)
    
  }


}
