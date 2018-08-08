import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThumbComponent } from './list-thumb.component';

describe('ListThumbComponent', () => {
  let component: ListThumbComponent;
  let fixture: ComponentFixture<ListThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListThumbComponent ]
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
});
