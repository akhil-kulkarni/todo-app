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
	@Input() listId: string;
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
		this.createStuffService.saveItem(this.listId, item['_id'], item['itemName']).subscribe((res) => {
			if (!res || res.resp === 'F') {
				item['itemName'] = prevItemName;
				alert('Failed to update the item name');
			}
		});
	}

	deleteItem(itemId: string) {
		this.createStuffService.deleteItem(this.listId, itemId).subscribe((res) => {
			if (res) {
				this.deleteCallback(res.resp, this.cbContext);
			} else {
				this.deleteCallback('F', this.cbContext);
			}
		});
	}

}
