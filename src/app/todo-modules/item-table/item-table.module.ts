import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemTableComponent } from './item-table.component';
import { FormsModule } from '@angular/forms';
import { CreateStuffModule } from '../create-stuff/create-stuff.module';
import { TodoPipesModule } from '../todo-pipes/todo-pipes.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		CreateStuffModule,
		TodoPipesModule
	],
	declarations: [ItemTableComponent],
	exports: [ItemTableComponent]
})
export class ItemTableModule { }
