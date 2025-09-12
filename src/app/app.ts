import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [Header, User,Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    users=DUMMY_USERS;
    selectedUser!:string;

    get selectedUserName(){
        const user=this.users.find(u=>u.id===this.selectedUser);
        return user?user.name:'';
    }

    onSelect(id:string) {
      this.selectedUser=id;
      } 
}
