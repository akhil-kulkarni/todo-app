import { Injectable } from '@angular/core';

@Injectable()
export class TodoCommonService {
	private list: Array<{}>;
	constructor() { }

	setList(list: Array<{}>) {
		this.list = list;
	}

	getList() {
		return this.list;
	}
}
