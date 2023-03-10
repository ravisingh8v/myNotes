import { TestBed } from '@angular/core/testing';

import { TodoListPresenterService } from './todo-list-presenter.service';

describe('TodoListPresenterService', () => {
  let service: TodoListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
