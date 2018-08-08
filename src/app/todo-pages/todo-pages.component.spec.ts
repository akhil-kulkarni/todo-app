import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPagesComponent } from './todo-pages.component';

describe('TodoPagesComponent', () => {
  let component: TodoPagesComponent;
  let fixture: ComponentFixture<TodoPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
