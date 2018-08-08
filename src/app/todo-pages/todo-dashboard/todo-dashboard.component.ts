import { Component, OnInit } from '@angular/core';
import { CreateStuffService } from '../../todo-modules/create-stuff/create-stuff.service';

import {Router} from '@angular/router';
import { TodoCommonService } from '../../todo-common/todo-common.service';

@Component({
	selector: 'todo-dashboard',
	templateUrl: './todo-dashboard.component.html',
	styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent implements OnInit {

	lists: Array<{}>;
	_this: any;
	showLists = false;


	constructor(private createStuffService: CreateStuffService, private router: Router, private todoCommonService: TodoCommonService) {
		this._this = this;
		this.lists = this.createStuffService.getAllLists();
		console.log(this.lists);

		if (this.lists.length > 0) {
			this.showLists = true;
		}

	}

	ngOnInit() {

	}

	createList(value: string, _this: any) {
		console.log('createList: ' + value);
		_this.lists = _this.createStuffService.getAllLists();
	}

	gotoListView(list: Array<{}>) {
		this.todoCommonService.setList(list);
		this.router.navigate(['/list']);
	}

	deleteListCallback(lists: Array<{}>, _this: any) {
		_this.lists = lists;
	}
}
