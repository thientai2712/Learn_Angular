import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/modal/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  editForm!: FormGroup
  user!:User | undefined

  constructor(private usersService : UsersService, private activetedRoute: ActivatedRoute, private fb: FormBuilder){

  }

  ngOnInit(): void {
    const id = parseInt(this.activetedRoute.snapshot.params?.['id'])
    this.usersService.getUserById(id).subscribe(user => {
      this.user = user
      this.editForm = this.fb.group({
        firstName: [user?.firstname, Validators.compose([Validators.required, Validators.minLength(3)])],
        lastName:  [user?.lastname, Validators.required],
        username:  [user?.username, Validators.required],
        password:  ['', ],
        confirmPassword:  ['', ],

      })
    })
  }

  doUpdate(){
    if(confirm("Are you sure to update this user??")){
      const value = this.editForm.value

      if(value.password === value.confirmPassword){
        const newUser: User= {
          firstname: value.firstName,
          lastname: value.lastName,
          username: value.username,
          password: value.password === ''? this.user?.password : value.password,
        }
        this.usersService.updateUser(newUser)
        alert('Update User success!!')
      }else{
        alert('Password is not the same!')
      }
    }

  }

}
