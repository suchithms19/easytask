import { Component, EventEmitter, Output } from '@angular/core';
import { taskSchema } from './add-task.type';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.html',
  styleUrl: './add-task.css'
})
export class AddTask {
  @Output() onClick = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<taskSchema>();
  enteredTitle ="";
  enteredSummary="";
  enteredDate="";

  onClickCancel(){
    this.onClick.emit();
  }

  onSubmit() {
    this.addTask.emit({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate
    })
  }
}
