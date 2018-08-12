import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThumbComponent } from './list-thumb.component';
import { By } from '../../../../node_modules/@angular/platform-browser';

describe('ListThumbComponent', () => {
	let component: ListThumbComponent;
	let fixture: ComponentFixture<ListThumbComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ListThumbComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ListThumbComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should edit the list name', () => {
		const editLink = fixture.debugElement.query(By.css('span[id="edit"]'));

		editLink.triggerEventHandler('click', null);

		expect(component).toBeTruthy();
	});

});
