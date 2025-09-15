import { NgModule } from "@angular/core";
import { Tasks } from "./tasks";
import { Task } from "../task/task";
import { AddTask } from "../add-task/add-task";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../ui/card/shared.module";

@NgModule({
    declarations: [Tasks, Task, AddTask],
    exports: [Tasks],
    imports: [FormsModule,CommonModule,SharedModule]
})
export class TasksModule { }