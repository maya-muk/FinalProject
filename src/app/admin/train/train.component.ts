import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/admin.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent {

  @ViewChild('CreateTrains') Create: any;
  @ViewChild('DeleteTrains') Delete: any;
  @ViewChild('UpdateTrains') Update: any

  CreateTrainForm = new FormGroup
  (
    {
      trainname: new FormControl('', Validators.required),
      capacityy: new FormControl('', Validators.required),
    }
  )

  UpdateTrainForm = new FormGroup
  (
    {
      trainid : new FormControl('41'),
      trainname: new FormControl('', Validators.required),
      capacityy: new FormControl('', Validators.required),
    }
  )
  constructor(public adminServices:AdminService,public dialog:MatDialog){}

  ngOnInit()
  {
     this.adminServices.GetAllTrain()
  }

  async CreateTrain()
  {
     await this.adminServices.CreateTrain(this.CreateTrainForm.value)
     this.adminServices.GetAllTrain()
  }

  OpenDialog() {
    this.dialog.open(this.Create, { height: '160px', width: '700px' })
  }

  ID = 0
  OpenDeleteDialog(TrainID: number) {
    this.ID = TrainID
    console.log(this.ID);
    
    this.dialog.open(this.Delete ,{height:'150px' ,width:'400px'})

  }
  async DeleteTrain() {
    console.log(this.ID);
    await this.adminServices.DeleteTrains(this.ID)
    this.adminServices.GetAllTrain()
  }

  Train : any
  async OpenUpdateDialog(id:any)
  {
    this.Train = await this.adminServices.AllTrain.filter((obj:any)=>obj.trainid == id)
    this.UpdateTrainForm.patchValue(this.Train[0])
    this.dialog.open(this.Update, { height: '160px', width: '700px' })
  }

  async UpdateTrain()
  {
    await this.adminServices.UpdateTrain(this.UpdateTrainForm.value)
    this.adminServices.GetAllTrain()
  }
}
