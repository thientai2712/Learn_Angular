import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/modal/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{

  addForm!: FormGroup

  constructor(private fb: FormBuilder, private usersService : UsersService){

  }

  ngOnInit(): void {
      this.addForm = this.fb.group({
        firstName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        lastName:  ['', Validators.required],
        username:  ['', Validators.required],
        password:  ['', Validators.required],
        confirmPassword:  ['', Validators.required],

      })
  }

  doCreateUser(){

    const  value = this.addForm.value;
    if(value.password !== value.confirmPassword){
      alert('Password is not match!!')
      return
    }

    const newUser : User = {
      firstname: value.firstName,
      lastname: value.lastName,
      username: value.username,
      password: value.password
    }

    this.usersService.addUser(newUser);
    alert('Created user success!!')
  }

}
