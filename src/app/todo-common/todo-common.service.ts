import { Injectable } from '@angular/core';

@Injectable()
export class TodoCommonService {
	private list: Array<{}>;
	constructor() { }

	setList(list: Array<{}>) {
		this.list = list;
		sessionStorage.setItem('_todoList', JSON.stringify(this.list || {}));
	}

	getList() {
		return this.list || (JSON.parse(sessionStorage.getItem('_todoList')));
	}
}
