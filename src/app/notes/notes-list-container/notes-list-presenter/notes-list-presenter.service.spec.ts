import { TestBed } from '@angular/core/testing';

import { NotesListPresenterService } from './notes-list-presenter.service';

describe('NotesListPresenterService', () => {
  let service: NotesListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
