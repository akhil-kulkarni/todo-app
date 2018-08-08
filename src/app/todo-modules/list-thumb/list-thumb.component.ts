import { Component, OnInit, Input } from '@angular/core';
import { CreateStuffService } from '../create-stuff/create-stuff.service';

@Component({
	selector: 'todo-list-thumb',
	templateUrl: './list-thumb.component.html',
	styleUrls: ['./list-thumb.component.css']
})
export class ListThumbComponent implements OnInit {
	@Input() list: object;
	@Input() callback: Function;
	@Input() cbContext: any;
	constructor(private createStuffService: CreateStuffService) {

	}

	ngOnInit() {
		console.log(this.list);
	}

	editListName(list: {}) {
		list['prevListName'] = list['listName'];
		list['editing'] = !list['editing'];
	}

	saveListName(list: {}) {
		const prevListName = list['prevListName'] || null;
		delete list['editing'];
		delete list['prevItemName'];
		list['lastModifiedDate'] = new Date();
		this.createStuffService.saveListName(list, prevListName);
	}

	deleteList(listName: string) {
		const lists = this.createStuffService.deleteList(listName);
		this.callback(lists, this.cbContext);
	}

}
