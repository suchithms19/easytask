import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css'
})
export class AddTask {
  @Output() onClick = new EventEmitter<void>();
  enteredTitle ="";
  enteredSummary="";
  enteredDate="";

  onClickCancel(){
    this.onClick.emit();
  }
}
