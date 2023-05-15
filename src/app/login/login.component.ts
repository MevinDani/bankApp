import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private route:Router,private fb:FormBuilder,private ds:DataService) {}

  ngOnInit(): void {}

  welcomeData="Your perfect Banking Partner"

  uname:any
  psw:any

  loginForm = this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })

  login() {
    const loginPath = this.loginForm.value
    console.log(loginPath.acno,loginPath.psw);

    if(this.loginForm.valid) {
      this.ds.loginApi(loginPath.acno,loginPath.psw)
      .subscribe((result:any)=> {
        alert(result.message)
        console.log(result.currentUser,result.currentAcno);
        this.route.navigateByUrl('home')
      },result => {
        alert(result.error.message)
      })
    } else {
      alert("invalid form")
    }
  }

  signUp() {
    alert("sign up clicked")
  }
}
