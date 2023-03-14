import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/service/api.service';
import { todoForm } from './todo-form-model';

@Component({
  selector: 'app-to-do-form-container',
  templateUrl: './to-do-form-container.component.html',
  styleUrls: ['./to-do-form-container.component.scss']
})
export class ToDoFormContainerComponent {
  public currentTodoList: Observable<todoForm>
  constructor(private _apiService: ApiService) {
    this.currentTodoList = new Observable()
  }
  postTodoList(list: todoForm) {
    this._apiService.postTodoList(list).subscribe((res) => {
    })
  }
  getListDataById(id: number) {
    this.currentTodoList = this._apiService.getTodoById(id)
  }
  editTodo(data: todoForm) {

    this._apiService.putTodoData(data.id, data).subscribe((res) => {
      // console.log(res);
    })

  }
}
