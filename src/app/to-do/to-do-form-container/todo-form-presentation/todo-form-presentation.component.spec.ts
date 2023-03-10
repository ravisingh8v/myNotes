import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormPresentationComponent } from './todo-form-presentation.component';

describe('TodoFormPresentationComponent', () => {
  let component: TodoFormPresentationComponent;
  let fixture: ComponentFixture<TodoFormPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFormPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
