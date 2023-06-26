import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crud_angular_tailwind';

  ngOnInit(): void {
    this.usersService.fetchDataFromLocalStorage();
  }

  constructor (private usersService: UsersService){

  }
}
