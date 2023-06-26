import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modal/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[] = []

  constructor(private usersService: UsersService){

  }

  ngOnInit(): void {

    this.usersService.users$.subscribe(users => this.users = users)
  }
  addUser(){
    const newUser: User = {
      firstname:'Huy',
      lastname: 'Dy',
      username: 'huydu202',
      password: '13216546'
    }

      this.usersService.addUser(newUser)
  }

  removeUser(id: any | undefined){
    if(confirm("Are you sure to delete user?")){
      this.usersService.removeUser(id);
      alert('Delete User success!!')
    }
  }

}
