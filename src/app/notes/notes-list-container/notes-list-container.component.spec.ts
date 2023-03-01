import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesListContainerComponent } from './notes-list-container.component';

describe('NotesListContainerComponent', () => {
  let component: NotesListContainerComponent;
  let fixture: ComponentFixture<NotesListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesListContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
