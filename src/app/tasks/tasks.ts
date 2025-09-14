import { Component, Input } from '@angular/core';
import { Task } from '../task/task';
import { dummyTasks } from '../dummy-tasks';
import { AddTask } from '../add-task/add-task';
import { taskSchema } from '../add-task/add-task.type';

@Component({
  selector: 'app-tasks',
  imports: [Task,AddTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({required:true}) userId!:string;
  @Input({required:true}) name!:string;
  tasks = dummyTasks;
  isAddingTask = false;

  get getSelectedById() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }

  onComplete(id:string) {
    this.tasks = this.tasks.filter((task)=> task.id != id)
  }

  addTask() {
    this.isAddingTask = true;
  }

  onClickChange(){
      this.isAddingTask = false;
    }

  onSubmit(newTask:taskSchema) {
    this.tasks.push({
      title:newTask.title,
      summary:newTask.summary,
      dueDate:newTask.date,
      userId:this.userId,
      id: new Date().toISOString()
    });
    this.isAddingTask = false;
  }
}