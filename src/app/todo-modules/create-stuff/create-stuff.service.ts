import { Injectable } from '@angular/core';
import { TodoCommonService } from '../../todo-common/todo-common.service';
import { Http , Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CreateStuffService {

	constructor(private todoCommonService: TodoCommonService, private http: Http) { }

	getAllLists() {
		return this.http.get('http://localhost:3000/api/lists').map(res => res.json());
	}

	createList(listName: string) {
		const headers = new Headers({ 'Content-Type': 'application/json'});
		const options = new RequestOptions({ headers: headers });
		return this.http.post('http://localhost:3000/api/lists', { listName }, options).map(res => res.json());
	}

	saveListName(listId: string, listName: string) {
		const headers = new Headers({ 'Content-Type': 'application/json'});
		const options = new RequestOptions({ headers: headers });
		const params = new URLSearchParams();
		params.set('listId', listId);
		options.search = params;
		return this.http.put('http://localhost:3000/api/lists', { listName }, options).map(res => res.json());
	}

	deleteList(listId: string, listName: string) {
		const headers = new Headers({ 'Content-Type': 'application/json'});
		const options = new RequestOptions({ headers: headers });
		const params = new URLSearchParams();
		params.set('listId', listId);
		options.search = params;
		return this.http.delete('http://localhost:3000/api/lists', options).map(res => res.json());
	}

	getItemsList(listId: string) {
		const headers = new Headers({ 'Content-Type': 'application/json'});
		const options = new RequestOptions({ headers: headers });
		const params = new URLSearchParams();
		params.set('listId', listId);
		options.search = params;
		return this.http.get('http://localhost:3000/api/items', options).map(res => res.json());
	}

	createItem(listId: string, itemName: string) {
		const headers = new Headers({ 'Content-Type': 'application/json' });
		const options = new RequestOptions({ headers: headers });
		return this.http.post('http://localhost:3000/api/items', { listId, itemName }, options).map(res => res.json());
	}

	saveItem(listId: string, itemId: string, itemName: string) {
		const headers = new Headers({ 'Content-Type': 'application/json'});
		const options = new RequestOptions({ headers: headers });
		const params = new URLSearchParams();
		params.set('listId', listId);
		params.set('itemId', itemId);
		options.search = params;
		return this.http.put('http://localhost:3000/api/items', { itemName }, options).map(res => res.json());
	}

	deleteItem(listId: string, itemId: string) {
		const headers = new Headers({ 'Content-Type': 'application/json'});
		const options = new RequestOptions({ headers: headers });
		const params = new URLSearchParams();
		params.set('listId', listId);
		params.set('itemId', itemId);
		options.search = params;
		return this.http.delete('http://localhost:3000/api/items', options).map(res => res.json());
	}

}
