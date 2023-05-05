import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private route:Router) {}

  ngOnInit(): void {}

  welcomeData="Your perfect Banking Partner"
  placeHolderData="Account Number"

  uname:any
  psw:any

  login() {
    console.log(this.uname,this.psw);
    this.route.navigateByUrl('home')
  }

  signUp() {
    alert("sign up clicked")
  }
}
