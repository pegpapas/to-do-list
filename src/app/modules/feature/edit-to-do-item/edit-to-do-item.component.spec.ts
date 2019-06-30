import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditToDoItemComponent } from './edit-to-do-item.component';

describe('EditToDoItemComponent', () => {
  let component: EditToDoItemComponent;
  let fixture: ComponentFixture<EditToDoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditToDoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditToDoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
