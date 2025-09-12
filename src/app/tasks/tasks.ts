import { Component, Input } from '@angular/core';
import { Task } from '../task/task';
import { dummyTasks } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({required:true}) userId!:string;
  @Input({required:true}) name!:string;
  tasks = dummyTasks;

  get getSelectedById() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }

  onComplete(id:string) {
    this.tasks = this.tasks.filter((task)=> task.id != id)
  }

}
