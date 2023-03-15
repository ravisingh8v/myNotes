import { Injectable } from '@angular/core';
import { todoForm } from '../../to-do-form-container/todo-form-model';

@Injectable({
  providedIn: 'root'
})
export class TodoListPresenterService {

  constructor() { }


  setDeleteId(res: number, todoList: todoForm[]) {
    return res = todoList[todoList.length - 1].id + 1
  }
}
