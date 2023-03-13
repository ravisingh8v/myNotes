import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoCommunicationServiceService } from '../../service/todo-communication-service.service';
import { todoForm } from '../../to-do-form-container/todo-form-model';

@Component({
  selector: 'app-todo-list-presentation',
  templateUrl: './todo-list-presentation.component.html',
  styleUrls: ['./todo-list-presentation.component.scss']
})
export class TodoListPresentationComponent implements OnInit {
  @Output() deleteTodo: EventEmitter<number>


  @Input() set todoLists(response: todoForm[] | null) {
    if (response) {
      this._todoList = response;
    }
  }

  public get todoList() {
    return this._todoList
  }

  private _todoList!: todoForm[];
  public isDark: boolean;

  constructor(private todoCommunicationService: TodoCommunicationServiceService) {
    this.deleteTodo = new EventEmitter()
    this.isDark = false;
  }
  ngOnInit(): void {
    this.todoCommunicationService.themesSubject.subscribe((res) => {
      this.isDark = res == 'bi-brightness-high-fill' ? true : false;
    })
    this.todoCommunicationService.todoList.subscribe((res) => {
      this.todoList.push(res)
    })
  }
  deleteTodoData(data: todoForm) {
    this.deleteTodo.emit(data.id)
  }

}
