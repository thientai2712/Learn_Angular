import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";


const REGEX_PHONENUMBER = /^(\+[0-9]{1,3}|0)[0-9]{3}( ){0,1}[0-9]{7,8}\b/gm; // Regular Expression 1
const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent  {

    name = new FormControl('',
    [
      Validators.required,
      Validators.minLength(3)
    ]
    )
  email = new FormControl('',
  [
    Validators.required,
    Validators.email
  ])
  age = new FormControl('', [
    Validators.required,
    Validators.min(18),
    Validators.max(120)
  ])
  password = new FormControl('',
  [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ])
  confirm_password = new FormControl('',
  [
    Validators.required,

  ])
  phoneNumber = new FormControl('',
  [
    Validators.required,
    Validators.minLength(13),
    Validators.maxLength(13),
  ])
  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber
  })

  constructor(){
    this.name
  }


  showAlert = false
  alertMsg = 'Please wait! Your account is being created'
  alertColor= 'blue'


  register(){
    this.showAlert = true
    this.alertMsg = 'Please wait! Your account is being created'
    this.alertMsg = 'blue'
  }
}
