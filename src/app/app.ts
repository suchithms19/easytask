import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    users=DUMMY_USERS;
    selectedUser!:string;

    get selectedUserName(){
      return this.users.find(u=>u.id===this.selectedUser);
    }

    onSelect(id:string) {
      this.selectedUser=id;
      } 
}
