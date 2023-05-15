import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb:FormBuilder,private ds:DataService,private router:Router) {}

  ngOnInit(): void {}
  
  welcomeData="Your perfect Banking Partner"
  pswCheck:any=false
  // accNum:any
  // uname:any
  // passwd:any

// Model Form
  registerForm = this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]],
    cpsw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })

  register() {
    const regFormPath = this.registerForm.value
    // console.log(regFormPath.acno,regFormPath.uname,regFormPath.psw);

    if(this.registerForm.valid) {
      if(regFormPath.psw == regFormPath.cpsw) {

        this.ds.registerApi(regFormPath.acno,regFormPath.uname,regFormPath.psw)
        .subscribe((result:any) => {
          alert(result.message)
          this.router.navigateByUrl("")
        },
          result=>alert(result.error.message))
      } else {
        this.pswCheck = true
      }
    } else {
      alert("invalid form")
    }
  }
}
