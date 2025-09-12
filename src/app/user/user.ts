import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { type UserData } from './user.type';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {  
  @Input({required:true}) user!:UserData;
  @Input({required:true}) isSelected!:boolean;
  @Output() select = new EventEmitter();

  onSelect() {
    this.select.emit(this.user.id);
  }
}


