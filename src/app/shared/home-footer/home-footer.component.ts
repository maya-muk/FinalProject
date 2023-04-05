import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.css']
})
export class HomeFooterComponent {
constructor(public admin :AdminService){

}

logo:any
async ngOnInit() {

await this.admin.GettAllHome()
this.logo=await this.admin.AllHome[0]


}


}
