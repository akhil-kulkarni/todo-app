import { Component, OnInit } from '@angular/core';
import { CreateStuffService } from '../../todo-modules/create-stuff/create-stuff.service';

import { Router } from '@angular/router';
import { TodoCommonService } from '../../todo-common/todo-common.service';

@Component({
	selector: 'todo-dashboard',
	templateUrl: './todo-dashboard.component.html',
	styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent implements OnInit {

	lists: Array<{}>;
	self: any;
	showLists = false;


	constructor(private createStuffService: CreateStuffService, private router: Router, private todoCommonService: TodoCommonService) {
		this.self = this;
		this.createStuffService.getAllLists().subscribe((res) => {
			if (res && res.resp === 'S') {
				this.lists = res.msg;
				console.log(this.lists);
				if (this.lists.length > 0) {
					this.showLists = true;
				}
			}
		});
	}

	ngOnInit() {

	}

	createList(value: string, self: any) {
		console.log('createList: ' + value);
		self.createStuffService.getAllLists().subscribe((res) => {
			if (res && res.resp === 'S') {
				self.lists = res.msg;
				if (self.lists.length > 0) {
					self.showLists = true;
				} else {
					self.showLists = false;
				}
			}
		});
	}

	gotoListView(list: Array<{}>) {
		this.todoCommonService.setList(list);
		this.router.navigate(['/list']);
	}

	deleteListCallback(status: string, self: any) {
		if (status === 'S') {
			self.createStuffService.getAllLists().subscribe((res) => {
				if (res && res.resp === 'S') {
					self.lists = res.msg;
					if (self.lists.length > 0) {
						self.showLists = true;
					} else {
						self.showLists = false;
					}
				}
			});
		} else {
			alert('Failed to delete list...');
		}
	}
}
