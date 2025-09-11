import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath() {
    return "assets/users/" + this.selectedUser.avatar ;
  }

  get imageAlt() {
    return this.selectedUser.name + "photo";
  }
}
