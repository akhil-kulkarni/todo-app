import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoCommonService } from '../../todo-common/todo-common.service';
import { CreateStuffService } from '../../todo-modules/create-stuff/create-stuff.service';


@Component({
	selector: 'todo-list-view',
	templateUrl: './todo-list-view.component.html',
	styleUrls: ['./todo-list-view.component.css']
})
export class TodoListViewComponent implements OnInit {
	list: Array<{}>;
	showItemTable = false;
	self: any;
	listId: string;
	constructor(private route: ActivatedRoute, private todoCommonService: TodoCommonService, private createStuffService: CreateStuffService) {
		this.self = this;
		this.list = this.todoCommonService.getList();
		this.listId = this.list['id'];
		this.createStuffService.getItemsList(this.listId).subscribe((res) => {
			if (res && res.resp === 'S') {
				this.list = res.msg;
				console.log(this.list);
				if (this.list.length > 0) {
					this.showItemTable = true;
				}
			}
		});
	}

	ngOnInit() {

	}

	createItem(value: string, self: any) {
		console.log('createItem: ' + self.list);
		self.createStuffService.getItemsList(self.listId).subscribe((res) => {
			if (res && res.resp === 'S') {
				self.list = res.msg;
				console.log(self.list);
				if (self.list.length > 0) {
					self.showItemTable = true;
				}
			}
		});
	}

	// deleteCallback(itemList: Array<{}>, self: any) {
	// 	if (!!itemList && itemList.length > 0) {
	// 		self.showItemTable = true;
	// 	} else {
	// 		self.showItemTable = false;
	// 	}
	// }

	deleteCallback(status: string, self: any) {
		if (status === 'S') {
			self.createStuffService.getItemsList(self.listId).subscribe((res) => {
				if (res && res.resp === 'S') {
					self.list = res.msg;
					if (self.list.length > 0) {
						self.showItemTable = true;
					} else {
						self.showItemTable = false;
					}
				}
			});
		} else {
			alert('Failed to delete list...');
		}
	}
}
