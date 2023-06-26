import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';


const routes: Routes = [
{
  path: '',
  component: UsersComponent,
  children:
  [
    {path: '', component: UsersListComponent },
    {path: 'add-user', component: AddUserComponent},
    {path: 'edit-user/:id', component: EditUserComponent},
  ],
}
];


@NgModule({
  declarations: [UsersComponent, UsersListComponent, AddUserComponent, EditUserComponent],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)
  ], exports: [RouterModule],
})
export class UsersModule { }
