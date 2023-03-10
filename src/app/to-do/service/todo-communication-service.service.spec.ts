import { TestBed } from '@angular/core/testing';

import { TodoCommunicationServiceService } from './todo-communication-service.service';

describe('TodoCommunicationServiceService', () => {
  let service: TodoCommunicationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoCommunicationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
