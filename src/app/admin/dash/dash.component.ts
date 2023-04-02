import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {

  constructor(public adminService: AdminService) { }

  User: any
  Ride: any
  Station: any
  Tickets: any
  
  Array:any = [this.adminService.AllUser.length,this.adminService.AllRide.length]
 async ngOnInit() {
    
    await this.adminService.GetAllUser()
    await this.adminService.GetAllRids()
    await this.adminService.GetAllTickets()
    await this.adminService.GetAllStation()

    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [this.adminService.AllUser.length, this.adminService.AllRide.length, this.adminService.AllTickets.length, this.adminService.AllStation.length],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
    
  }


  
}
