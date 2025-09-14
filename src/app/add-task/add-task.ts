import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  imports: [],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css'
})
export class AddTask {
  @Output() onClick = new EventEmitter<void>();

  onClickCancel(){
    this.onClick.emit();
  }
}
