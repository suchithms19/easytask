import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type TaskData } from './task.type';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required:true}) tasks!: TaskData;
  @Output() isComplete = new EventEmitter();

  onComplete() {
    this.isComplete.emit(this.tasks.id)
  }

}
