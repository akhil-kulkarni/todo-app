import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCommonService } from './todo-common.service';
@NgModule({
	imports: [
		CommonModule
	],
	declarations: [],
	providers: [TodoCommonService]
})
export class TodoCommonModule { }
