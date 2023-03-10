import { TestBed } from '@angular/core/testing';

import { TodoFormPresenterService } from './todo-form-presenter.service';

describe('TodoFormPresenterService', () => {
  let service: TodoFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
