import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/service/api.service';
import { todoForm } from './todo-form-model';

@Component({
  selector: 'app-to-do-form-container',
  templateUrl: './to-do-form-container.component.html',
  styleUrls: ['./to-do-form-container.component.scss']
})
export class ToDoFormContainerComponent {
  constructor(private _apiService: ApiService) {
  }
  postTodoList(list: todoForm) {
    this._apiService.postTodoList(list).subscribe((res) => {
    })
  }
}
