import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesListPresentationComponent } from './notes-list-presentation.component';

describe('NotesListPresentationComponent', () => {
  let component: NotesListPresentationComponent;
  let fixture: ComponentFixture<NotesListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesListPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
