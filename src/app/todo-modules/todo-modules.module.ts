import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateStuffModule } from './create-stuff/create-stuff.module';
import { ItemTableModule } from './item-table/item-table.module';
import { ListThumbModule } from './list-thumb/list-thumb.module';
import { NoDataFoundModule } from './no-data-found/no-data-found.module';
import { TodoPipesModule } from './todo-pipes/todo-pipes.module';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [],
	exports: [
		CreateStuffModule,
		ItemTableModule,
		ListThumbModule,
		NoDataFoundModule,
		TodoPipesModule
	]
})
export class TodoModulesModule { }
