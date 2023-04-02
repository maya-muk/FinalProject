import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  TotalPrice : any = 0
  TotalProfit: any = 0
  TotalProfitA : any = 0
  range = new FormGroup({
    start: new FormControl<Date | null >(null),
    end: new FormControl<Date | null>(null),
  });
  constructor(public adminservices:AdminService){}
  dtOptions: any = {};
  async ngOnInit() {

    await this.adminservices.ReturnReport()
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3,
      processing: true,
      dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'print'
        ]
      };

      for (let item of this.adminservices.Reports) {
        this.TotalPrice += item.price
      }
      this.TotalProfitA = (this.TotalPrice * (30 / 100))
      this.TotalPrice = 0
    }
    async onSubmit()
    {
      await this.adminservices.SearchReport(this.range.value.start?.toJSON().slice(0,10),this.range.value.end?.toJSON().slice(0,10))
      for (let item of this.adminservices.Reports) {
        this.TotalPrice += item.price
      }
      this.TotalProfit = (this.TotalPrice * (30 / 100))
      this.TotalPrice = 0
      this.range.reset()
    }
}
