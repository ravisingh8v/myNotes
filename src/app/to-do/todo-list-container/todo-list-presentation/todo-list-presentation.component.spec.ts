import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListPresentationComponent } from './todo-list-presentation.component';

describe('TodoListPresentationComponent', () => {
  let component: TodoListPresentationComponent;
  let fixture: ComponentFixture<TodoListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
