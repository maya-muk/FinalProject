import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  updateform = new FormGroup(
    {
      Username : new FormControl('',[Validators.required]),
      Email: new FormControl('',[Validators.required , Validators.email]),
      Password : new FormControl('',[Validators.required , Validators.minLength(5),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      Firstname : new FormControl('',[Validators.required]),
      Lastname : new FormControl('',[Validators.required])
    }

  )

  ngOnInit(){



    
  }



}
