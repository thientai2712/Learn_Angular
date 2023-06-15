import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'basics';
  name = 'luis nguyen';
  imgURL = 'asdasdasdasdasdasdasd';

  cost = 2000;

  temperater = 25.123455432323235

  date = new Date();

  pizza ={
      toppings: ['pepper', 'bocon'],
      size: 'large'
  }

  getName(){
    return this.name
  }

  logImg(event:string){
    console.log(event);
  }

  courses = [ 1,2 ];

  viewMode = 'somthingElse';

  students = [
    { id: 1, name: 'Huy'},
    { id: 2, name: 'Tai'},
    { id: 3, name: 'Vu'},
  ]
  onAdd(){
    this.students.push({
      id: 4, name: 'Tri'
    })
  }
  doRemove(student: any){
    let index = this.students.indexOf(student);
    this.students.splice(index, 1)
  }
}
