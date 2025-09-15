import { NgModule } from "@angular/core";
import { App } from "./app";
import { Header } from "./header/header";
import { User } from "./user/user";
import { Tasks } from "./tasks/tasks";
import { BrowserModule } from "@angular/platform-browser";
import { Task } from "./task/task";
import { AddTask } from "./add-task/add-task";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./ui/card/shared.module";

@NgModule({
    declarations: [App, Header, User, Tasks, Task, AddTask],
    bootstrap: [App],
    imports: [BrowserModule, FormsModule, SharedModule]
})

export class AppModule { }