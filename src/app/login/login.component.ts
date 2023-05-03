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
  uname:any
  pass:any

  login(a:any,b:any) {
    this.uname = a.value
    this.pass = b.value
    console.log(this.uname,this.pass);
    alert("login clicked")
  }

  signUp() {
    alert("sign up clicked")
  }
}
