import { Component } from '@angular/core';
<<<<<<< HEAD
import { FormControl, FormGroup, Validators } from '@angular/forms';
=======
import { FormControl } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
>>>>>>> c8f23aea97cb28b75fbdc4f7a6d6849ff72e0eb3

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
<<<<<<< HEAD

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


=======
email = new FormControl('',[])
constructor(private spinner: NgxSpinnerService) {}

ngOnInit() {
  /** spinner starts on init */
  this.spinner.show();

  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
  }, 3000);
}
>>>>>>> c8f23aea97cb28b75fbdc4f7a6d6849ff72e0eb3
}
