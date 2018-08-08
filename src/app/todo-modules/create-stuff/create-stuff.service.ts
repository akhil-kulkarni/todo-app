import { Injectable } from '@angular/core';

@Injectable()
export class CreateStuffService {

	constructor() { }


	createList(listName: string) {
		if (!!listName) {
			if (!this.listExists(listName)) {
				if (this.createNewList(listName)) {
					return 'List created successfully.';
				}
				return 'Unable to create the list.';
			}
			return 'List already exists, kindly provide some other name.';
		}
		return 'Please provide the list name.';
	}

	listExists(listName: string) {
		const lists = JSON.parse(localStorage.getItem('lists')) || [];
		const list = lists.filter (_list => _list.listName === listName);
		return list.length > 0;
	}

	createNewList(listName: string) {
		const lists = JSON.parse(localStorage.getItem('lists')) || [];
		lists.push({
			listName: listName,
			listItems: [],
			createdDate: new Date(),
			lastModifiedDate: null,
			isDeleted: false,
			isComplete: false,
			completionDate: null
		});
		localStorage.setItem('lists', JSON.stringify(lists));
	}

	getListByName(listName: string) {
		const lists = JSON.parse(localStorage.getItem('lists')) || [];
		return lists.filter (_list => _list.listName === listName)[0];
	}

	getAllLists() {
		return JSON.parse(localStorage.getItem('lists')) || [];
	}

	createItem(item: string, listName: string) {
		if (!!item) {
			if (!!listName) {
				if (!this.listExists(listName)) {
					this.createNewList(listName);
				}
				this.createNewItem(item, listName);
			}
			return 'Please provide the list name.';
		}
		return 'Please provide the item.';
	}

	createNewItem(item: string, listName: string) {
		const lists = JSON.parse(localStorage.getItem('lists')) || [];
		const listItems = lists.filter (_list => _list.listName === listName)[0].listItems;
		listItems.push({
			itemName: item,
			createdDate: new Date(),
			lastModifiedDate: null,
			isDeleted: false,
			isComplete: false,
			completionDate: null
		});
		const _index = lists.findIndex (_list => _list.listName === listName);
		lists[_index].listItems = listItems;
		localStorage.setItem('lists', JSON.stringify(lists));
	}

	itemExists(item: string) {
		return localStorage.getItem(item) !== null;
	}

	saveItem(item: {}, prevItemName: string, listName: string) {
		if (!!item['itemName'] && !!prevItemName && !!listName) {
			const lists = JSON.parse(localStorage.getItem('lists')) || [];
			const _listIndex = lists.findIndex (_list => _list.listName === listName);

			const list = lists[_listIndex];
			const listItems = list.listItems;
			const _itemIndex = listItems.findIndex (_item => _item.itemName === prevItemName);

			lists[_listIndex].listItems[_itemIndex] = item;

			localStorage.setItem('lists', JSON.stringify(lists));
		} else {
			console.log('Please provide all the data');
		}
	}

	deleteItem(itemName: string, listName: string) {
		if (!!itemName && !!listName) {
			const lists = JSON.parse(localStorage.getItem('lists')) || [];
			const _listIndex = lists.findIndex (_list => _list.listName === listName);

			const list = lists[_listIndex];
			const listItems = list.listItems;
			const _itemIndex = listItems.findIndex (_item => _item.itemName === itemName);

			lists[_listIndex].listItems[_itemIndex].isDeleted = true;

			localStorage.setItem('lists', JSON.stringify(lists));
			return lists[_listIndex].listItems;
		} else {
			console.log('Please provide all the data');
		}
	}

	saveListName(list: {}, prevListName: string) {
		if (!!list && !!list['listName'] && !!prevListName) {
			const lists = JSON.parse(localStorage.getItem('lists')) || [];
			const _listIndex = lists.findIndex (_list => _list.listName === prevListName);
			lists[_listIndex] = list;
			localStorage.setItem('lists', JSON.stringify(lists));
		} else {
			console.log('Please provide all the data');
		}
	}

	deleteList(listName: string) {
		if (!!listName) {
			const lists = JSON.parse(localStorage.getItem('lists')) || [];
			const _listIndex = lists.findIndex (_list => _list.listName === listName);

			lists[_listIndex].isDeleted = true;

			localStorage.setItem('lists', JSON.stringify(lists));
			return lists;
		} else {
			console.log('Please provide all the data');
		}
	}
}
