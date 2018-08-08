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
	_this: any;
	constructor(private route: ActivatedRoute, private todoCommonService: TodoCommonService, private createStuffService: CreateStuffService) {
		this._this = this;
		this.list = this.todoCommonService.getList();
		if (this.list['listItems'].length > 0) {
			this.showItemTable = true;
		}
	}

	ngOnInit() {

	}

	createItem(value: string, _this: any) {
		console.log('createItem: ' + _this.list);
		_this.list = this.createStuffService.getListByName(_this.list['listName']);
		if (_this.list['listItems'].length > 0) {
			_this.showItemTable = true;
		}
	}

	deleteCallback(itemList: Array<{}>, _this: any) {
		if (!!itemList && itemList.length > 0) {
			_this.showItemTable = true;
		} else {
			_this.showItemTable = false;
		}
	}
}
