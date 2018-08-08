import { Component, OnInit, Input } from '@angular/core';
import { CreateStuffService } from '../create-stuff/create-stuff.service';

@Component({
	selector: 'todo-item-table',
	templateUrl: './item-table.component.html',
	styleUrls: ['./item-table.component.css']
})
export class ItemTableComponent implements OnInit {

	@Input() deleteCallback: Function;
	@Input() itemList: Array<{}>;
	@Input() listName: string;
	@Input() cbContext: any;

	constructor(private createStuffService: CreateStuffService) {}

	ngOnInit() {
		console.log(this.itemList);
	}

	editItem(item: {}) {
		item['prevItemName'] = item['itemName'];
		item['editing'] = !item['editing'];
	}

	saveItem(item: {}) {
		const prevItemName = item['prevItemName'] || null;
		delete item['editing'];
		delete item['prevItemName'];
		item['lastModifiedDate'] = new Date();
		this.createStuffService.saveItem(item, prevItemName, this.listName);
	}

	deleteItem(itemName: string) {
		this.itemList = this.createStuffService.deleteItem(itemName, this.listName);
		console.log(this.itemList);
		this.deleteCallback(this.itemList, this.cbContext);
	}
}
