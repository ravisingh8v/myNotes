import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TodoCommunicationServiceService } from '../../service/todo-communication-service.service';
import { todoForm } from '../../to-do-form-container/todo-form-model';
import { TodoListPresenterService } from '../todo-list-service/todo-list-presenter.service';

@Component({
  selector: 'app-todo-list-presentation',
  templateUrl: './todo-list-presentation.component.html',
  styleUrls: ['./todo-list-presentation.component.scss']
})
export class TodoListPresentationComponent implements OnInit {
  @Output() deleteTodo: EventEmitter<number>
  @Output() checkedData: EventEmitter<todoForm>
  @Output() clearAll: EventEmitter<todoForm[]>

  @Input() set todoLists(response: todoForm[] | null) {
    if (response) {
      // for updating data without refresh
      this.todoCommunicationService.atferUpdateTodo.subscribe((updatedData) => {
        if (updatedData) {
          const index = response.findIndex((res) =>
            res.id == updatedData.id
          )
          this._todoList[index] = updatedData;
        }
      })
      // to add data
      this._todoList = response;

    }
  }

  public get todoList(): todoForm[] {
    return this._todoList
  }

  private _todoList!: todoForm[];
  public isDark: boolean;
  public disable!: boolean;
  constructor(private todoCommunicationService: TodoCommunicationServiceService, private todoListPresenterService: TodoListPresenterService) {
    this.deleteTodo = new EventEmitter()
    this.checkedData = new EventEmitter()
    this.clearAll = new EventEmitter()
    this.isDark = false;
  }

  ngOnInit(): void {
    this.todoCommunicationService.themesSubject.subscribe((res) => {
      this.isDark = res == 'bi-brightness-high-fill' ? true : false;
    })
    this.todoCommunicationService.todoList.subscribe((res) => {
      // setting custom id for Immediate delete after pushsss
      // res.id = this.todoList[this.todoList.length - 1].id + 1
      res.id = this.todoListPresenterService.setDeleteId(res.id, this.todoList)

      // for adding list wihtout refresh
      this.todoList.push(res)
    })
  }
  onChecked(event: any, index: number) {
    if (event.target.checked) {
      this.todoList[index].active = false
      this.checkedData.emit(this.todoList[index])
    }
  }


  deleteTodoData(data: todoForm) {
    this.deleteTodo.emit(data.id)
  }
  editTodoData(data: todoForm) {
    this.todoCommunicationService.getTodoById.next(data)
  }
  // clearAllTodo() {
  //   this.clearAll.emit(this.todoList);
  // }
}
