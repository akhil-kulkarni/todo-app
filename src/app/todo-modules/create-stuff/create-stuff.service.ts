import { Injectable } from '@angular/core';
import { TodoCommonService } from '../../todo-common/todo-common.service';
import { Http , Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CreateStuffService {

	domain: string;

	constructor(private todoCommonService: TodoCommonService, private http: Http) {
		this.domain = 'http://localhost:3000'; // 'http://192.168.1.4:3000';
	}

	getAllLists() {
		return this.http.get(this.domain + '/api/lists').map(res => res.json());
	}

	createList(listName: string) {
		const headers = new Headers({ 'Content-Type': 'application/json'});
		const options = new RequestOptions({ headers: headers });
		return this.http.post(this.domain + '/api/lists', { listName }, options).map(res => res.json());
	}

	saveListName(listId: string, listName: string) {
		const headers = new Headers({ 'Content-Type': 'application/json'});
		const options = new RequestOptions({ headers: headers });
		const params = new URLSearchParams();
		params.set('listId', listId);
		options.search = params;
		return this.http.put(this.domain + '/api/lists', { listName }, options).map(res => res.json());
	}

	deleteList(listId: string, listName: string) {
		const headers = new Headers({ 'Content-Type': 'application/json'});
		const options = new RequestOptions({ headers: headers });
		const params = new URLSearchParams();
		params.set('listId', listId);
		options.search = params;
		return this.http.delete(this.domain + '/api/lists', options).map(res => res.json());
	}

	getItemsList(listId: string) {
		const headers = new Headers({ 'Content-Type': 'application/json'});
		const options = new RequestOptions({ headers: headers });
		const params = new URLSearchParams();
		params.set('listId', listId);
		options.search = params;
		return this.http.get(this.domain + '/api/items', options).map(res => res.json());
	}

	createItem(listId: string, itemName: string) {
		const headers = new Headers({ 'Content-Type': 'application/json' });
		const options = new RequestOptions({ headers: headers });
		return this.http.post(this.domain + '/api/items', { listId, itemName }, options).map(res => res.json());
	}

	saveItem(listId: string, itemId: string, itemName: string) {
		const headers = new Headers({ 'Content-Type': 'application/json'});
		const options = new RequestOptions({ headers: headers });
		const params = new URLSearchParams();
		params.set('listId', listId);
		params.set('itemId', itemId);
		options.search = params;
		return this.http.put(this.domain + '/api/items', { itemName }, options).map(res => res.json());
	}

	deleteItem(listId: string, itemId: string) {
		const headers = new Headers({ 'Content-Type': 'application/json'});
		const options = new RequestOptions({ headers: headers });
		const params = new URLSearchParams();
		params.set('listId', listId);
		params.set('itemId', itemId);
		options.search = params;
		return this.http.delete(this.domain + '/api/items', options).map(res => res.json());
	}

}
