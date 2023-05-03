import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  welcomeData="Your perfect Banking Partner"
  placeHolderData="Account Number"
  login() {
    alert("login clicked")
  }
  signUp() {
    alert("sign up clicked")
  }
  unameChange(event:any){
    console.log(event.target.value);
    
  }
}
