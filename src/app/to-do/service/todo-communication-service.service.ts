import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { todoForm } from '../to-do-form-container/todo-form-model';

@Injectable()
export class TodoCommunicationServiceService {
  public themesSubject: Subject<string>
  public todoList: Subject<todoForm>
  public getTodoById: Subject<number>
  public atferUpdateTodo: Subject<todoForm>
  constructor() {

    this.themesSubject = new Subject()
    this.todoList = new Subject()
    this.getTodoById = new Subject()
    this.atferUpdateTodo = new Subject()
  }
}
