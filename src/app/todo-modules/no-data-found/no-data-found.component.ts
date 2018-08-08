import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'todo-no-data-found',
	templateUrl: './no-data-found.component.html',
	styleUrls: ['./no-data-found.component.css']
})
export class NoDataFoundComponent implements OnInit {
	@Input() stuff: string;
	constructor() {
		this.stuff = this.stuff || 'data';
	}

	ngOnInit() {
	}

}
