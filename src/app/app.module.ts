import { NgModule } from "@angular/core";
import { App } from "./app";
import { Header } from "./header/header";
import { User } from "./user/user";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./ui/card/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    declarations: [App, Header, User],
    bootstrap: [App],
    imports: [BrowserModule, SharedModule, TasksModule]
})

export class AppModule { }