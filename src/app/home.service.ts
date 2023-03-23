import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private toaster: ToastrService, private route: Router) { }


  


  //get station

  AllStation:any=[]

  GetStation()
  {
    return new Promise<void>((resolve,reject)=>
    {
      this.http.get('https://localhost:44304/api/Station').subscribe(
        {
          next:(result)=>
          {
            
              this.AllStation = result
              console.log(this.AllStation);
              this.toaster.success("success")
              resolve()
          },
          error:(err)=>{
               console.log(err);
               this.toaster.error("error")
          }
        }
    )
    })
  }


  //Contact US

  SendMessage(contact : any)
  {
    //console.log(contact);
    return new Promise<void>((resolve,reject)=>
    {
      this.http.post("https://localhost:44304/api/ContactUs/",contact).subscribe(
        {
          next:()=>
          {
            this.spinner.hide()
            this.toaster.success("The Message has been sent successfully..We will replay as soon as possible");
            resolve()
          }
          ,
          error:(err)=>
          {
            console.log(err);
            this.spinner.hide();
            this.toaster.error("You Must Fill All Data")
            
          }
        }
      )
    })
    
  }
}
