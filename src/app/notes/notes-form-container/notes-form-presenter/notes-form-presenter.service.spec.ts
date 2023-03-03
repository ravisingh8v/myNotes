import { TestBed } from '@angular/core/testing';

import { NotesFormPresenterService } from './notes-form-presenter.service';

describe('NotesFormPresenterService', () => {
  let service: NotesFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
