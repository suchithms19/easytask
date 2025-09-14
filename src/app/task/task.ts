import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type TaskData } from './task.type';
import { Card } from '../ui/card/card';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
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
