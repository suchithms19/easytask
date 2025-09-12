import { Component, Input } from '@angular/core';
import { type TaskData } from './task.type';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required:true}) tasks!: TaskData;

}
