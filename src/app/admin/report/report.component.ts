import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  range = new FormGroup({
    start: new FormControl<Date | null >(null),
    end: new FormControl<Date | null>(null),
  });
  constructor(public adminservices:AdminService){}
  dtOptions: any = {};
  ngOnInit() {

    this.adminservices.ReturnReport()
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3,
      processing: true,
      dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'print'
        ]
      };

    }
    onSubmit()
    {
       this.adminservices.SearchReport(this.range.value.start?.toJSON().slice(0,10),this.range.value.end?.toJSON().slice(0,10))
    }
}
