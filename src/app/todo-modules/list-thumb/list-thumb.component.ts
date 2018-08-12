import { Component, OnInit, Input } from '@angular/core';
import { CreateStuffService } from '../create-stuff/create-stuff.service';
import { ThrowStmt } from '../../../../node_modules/@angular/compiler';

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
		this.createStuffService.saveListName(list['id'], list['listName']).subscribe((res) => {
			if (!res || res.resp === 'F') {
				list['listName'] = prevListName;
				alert('Failed to update the list name');
			}
		});
	}

	deleteList(listId: string, listName: string) {
		this.createStuffService.deleteList(listId, listName).subscribe((res) => {
			if (res) {
				this.callback(res.resp, this.cbContext);
			} else {
				this.callback('F', this.cbContext);
			}
		});
	}

}
