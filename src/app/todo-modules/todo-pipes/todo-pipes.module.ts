import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListFilterPipe } from './item-list-filter.pipe';
@NgModule({
	imports: [
		CommonModule
	],
	declarations: [ItemListFilterPipe],
	exports: [ItemListFilterPipe]
})
export class TodoPipesModule { }
