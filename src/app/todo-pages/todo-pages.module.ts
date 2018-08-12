import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TodoListViewComponent } from './todo-list-view/todo-list-view.component';
import { TodoCommonModule } from '../todo-common/todo-common.module';
import { TodoModulesModule } from '../todo-modules/todo-modules.module';
import { TodoPagesComponent } from './todo-pages.component';

const appRoutes: Routes = [
	{ path: 'dashboard', component: TodoDashboardComponent },
	{ path: 'list', component: TodoListViewComponent },
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: false } // <-- debugging purposes only
		),
		CommonModule,
		TodoModulesModule,
		TodoCommonModule
	],
	declarations: [TodoDashboardComponent, TodoListViewComponent, TodoPagesComponent],
	exports: [TodoPagesComponent]
})
export class TodoPagesModule { }
