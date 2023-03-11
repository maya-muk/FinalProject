import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

LoginForm = new FormGroup(
{
    email: new FormControl('',[Validators.required , Validators.email]),
    password : new FormControl('',[Validators.required , Validators.minLength(5)])
}

)
RegisterForm = new FormGroup(
  {
    username : new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required , Validators.email]),
    password : new FormControl('',[Validators.required , Validators.minLength(5)])
  }
)


}
