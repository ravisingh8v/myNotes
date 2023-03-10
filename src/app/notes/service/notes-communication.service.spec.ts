import { TestBed } from '@angular/core/testing';

import { NotesCommunicationService } from './notes-communication.service';

describe('NotesCommunicationService', () => {
  let service: NotesCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
