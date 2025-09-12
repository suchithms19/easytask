import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {  
  @Input({required:true}) id!:string;
  @Input({required:true}) avatar!:string;
  @Input({required:true}) name!:string;
  @Output() select = new EventEmitter();

  onSelect() {
    this.select.emit(this.id);
  }
}


