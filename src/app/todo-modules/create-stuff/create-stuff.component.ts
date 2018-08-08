import { Component, OnInit, Input } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { CreateStuffService } from './create-stuff.service';

@Component({
	selector: 'todo-create-stuff',
	templateUrl: './create-stuff.component.html',
	styleUrls: ['./create-stuff.component.css']
})

export class CreateStuffComponent implements OnInit {
	@Input() callback: Function;
	@Input() type: string;
	@Input() itemListName: string;
	@Input() cbContext: any;

	createStuffForm: FormGroup;

	stuff: string;
	csBtnText: string;

	constructor(private fb: FormBuilder, private createStuffService: CreateStuffService) {
		this.createStuffForm = this.fb.group({
			stuff: ''
		});
	}

	ngOnInit() {
		if (!!this.type && this.type === 'I') {
			this.csBtnText = 'Create Item';
		} else if (this.type === 'L') {
			this.csBtnText = 'Create List';
		} else {
			this.csBtnText = 'Submit';
		}
	}

	createStuff() {
		console.log(this.createStuffForm.value.stuff + '...' + this.type + '...'
			+ this.itemListName);
		if (this.type === 'I') {
			this.createStuffService.createItem(this.createStuffForm.value.stuff, this.itemListName);
		} else if (this.type === 'L') {
			this.createStuffService.createList(this.createStuffForm.value.stuff);
		} else {
			console.log('Invalid type');
		}
		this.callback(this.createStuffForm.value.stuff, this.cbContext);

	}

}
