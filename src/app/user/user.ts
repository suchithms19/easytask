import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';

interface UserData {
  id: string;
  avatar: string;
  name: string;
}
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {  
  @Input({required:true}) user!:UserData;
  @Output() select = new EventEmitter();

  onSelect() {
    this.select.emit(this.user.id);
  }
}


