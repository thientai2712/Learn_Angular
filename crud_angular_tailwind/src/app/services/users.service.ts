import { Injectable } from '@angular/core';
import { User } from '../modal/user';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private static readonly UserStorageKey = "users"

  private users: User[] = []
  private usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  users$: Observable<User[]> = this.usersSubject.asObservable();

  constructor(private localStorageService: LocalStorageService) { }
  fetchDataFromLocalStorage(){
    this.users = this.localStorageService.getValue<User[]>(UsersService.UserStorageKey) || [];
  }

  updateToLocalStorage(){
    this.localStorageService.setObject(UsersService.UserStorageKey, this.users)
    this.updateData()
  }

  addUser(user: User): void{

    const isHasUser = this.users.find(u => u.username  === user.username);

    if(isHasUser){
      alert("Username has been exit~")
      return
    }

    const newUser = user

    newUser.id = new Date(Date.now()).getTime();

    this.users.unshift(user);

    this.updateToLocalStorage();
  }


  removeUser(id: number){
    const user = this.users.findIndex(u => u.id === id)
    this.users.splice(user,1)
    this.updateToLocalStorage();
  }

  private updateData(){
    this.usersSubject.next(this.users)
  }

  getUserById(id: number): Observable<User | undefined>{
    return of(this.users.find(u=>u.id === id))
  }

  updateUser(user: User){
    const idx = this.users.findIndex(u => u.id === user.id)
    this.users.splice(idx, 1, user)
    this.updateToLocalStorage();
  }
}
