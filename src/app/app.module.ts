import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoPagesModule } from './todo-pages/todo-pages.module';
@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		TodoPagesModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
