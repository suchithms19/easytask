import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type TaskData } from './task.type';
import { Card } from '../ui/card/card';

@Component({
  selector: 'app-task',
  imports: [Card],
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
