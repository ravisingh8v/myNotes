import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesFormContainerComponent } from './notes-form-container.component';

describe('NotesFormContainerComponent', () => {
  let component: NotesFormContainerComponent;
  let fixture: ComponentFixture<NotesFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesFormContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
