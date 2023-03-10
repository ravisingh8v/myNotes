import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoFormContainerComponent } from './to-do-form-container.component';

describe('ToDoFormContainerComponent', () => {
  let component: ToDoFormContainerComponent;
  let fixture: ComponentFixture<ToDoFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoFormContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
