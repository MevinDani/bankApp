import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  welcomeData="Your perfect Banking Partner"
  accNum:any
  uname:any
  passwd:any

  register() {
    console.log(this.accNum,this.uname,this.passwd);
    alert("User Registered")
  }
}
