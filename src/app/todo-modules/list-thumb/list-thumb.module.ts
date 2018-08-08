import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListThumbComponent } from './list-thumb.component';
import { FormsModule } from '@angular/forms';
import { TodoPipesModule } from '../todo-pipes/todo-pipes.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		TodoPipesModule
	],
	declarations: [ListThumbComponent],
	exports: [ListThumbComponent]
})
export class ListThumbModule { }
