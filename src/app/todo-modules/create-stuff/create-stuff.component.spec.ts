import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStuffComponent } from './create-stuff.component';

describe('CreateStuffComponent', () => {
  let component: CreateStuffComponent;
  let fixture: ComponentFixture<CreateStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
