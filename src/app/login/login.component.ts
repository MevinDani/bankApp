import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private ds:DataService) {}

  ngOnInit(): void {}

  welcomeData="Your perfect Banking Partner"
  placeHolderData="Account Number"

  uname:any
  psw:any

  login() {
    console.log(this.uname,this.psw);
    alert(this.ds.checkData())
    
  }

  signUp() {
    alert("sign up clicked")
  }
}
