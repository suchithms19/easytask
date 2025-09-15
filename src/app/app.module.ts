import { NgModule } from "@angular/core";
import { App } from "./app";
import { Header } from "./header/header";
import { User } from "./user/user";
import { Tasks } from "./tasks/tasks";
import { BrowserModule } from "@angular/platform-browser";
import { Card } from "./ui/card/card";
import { Task } from "./task/task";
import { AddTask } from "./add-task/add-task";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [App, Header, User, Card, Tasks, Task, AddTask],
    bootstrap: [App],
    imports: [BrowserModule, FormsModule]
})

export class AppModule { }