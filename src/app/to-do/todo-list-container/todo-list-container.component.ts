import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/service/api.service';
import { todoForm } from '../to-do-form-container/todo-form-model';

@Component({
  selector: 'app-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.scss']
})
export class TodoListContainerComponent implements OnInit {
  public todoList: Observable<todoForm[]>
  // public
  constructor(private _apiService: ApiService) {
    this.todoList = this._apiService.getTodoList()
  }
  ngOnInit(): void {
    this.todoList = this._apiService.getTodoList()
    // this.getTodoList()
  }
  deleteTodo(id: number) {
    this._apiService.deleteTodo(id).subscribe((res) => {
      this.todoList = this._apiService.getTodoList()

    })
  }
  getListDataById(id: number) {
    this._apiService.getTodoById(id).subscribe((res) => {
    })
  }
  // getTodoList() {
  //   this._apiService.getTodoList().subscribe((res) => {
  //   })
  // }
}
