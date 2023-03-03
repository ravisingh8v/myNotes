import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesFormPresentationComponent } from './notes-form-presentation.component';

describe('NotesFormPresentationComponent', () => {
  let component: NotesFormPresentationComponent;
  let fixture: ComponentFixture<NotesFormPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotesFormPresentationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NotesFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
