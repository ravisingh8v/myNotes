import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { TodoCommunicationServiceService } from '../../service/todo-communication-service.service';
import { todoForm } from '../todo-form-model';

@Injectable({
  providedIn: 'root'
})
export class TodoFormPresenterService {
  public lightThemeIcon: string;
  public darkThemeIcon: string;
  public currentTheme: string;
  public themeSubject: Subject<string>
  public todoList: Subject<todoForm>;
  constructor(private _formBuilder: FormBuilder) {
    this.themeSubject = new Subject()
    this.todoList = new Subject()
    this.lightThemeIcon = "bi-brightness-high-fill"
    this.darkThemeIcon = 'bi-moon-fill'
    this.currentTheme = '';
  }
  public formBuilder(): FormGroup {
    return this._formBuilder.group({
      id: [''],
      todo: [''],
      active: [true]
    })
  }

  themeChange() {
    if (this.currentTheme == this.lightThemeIcon) {
      this.currentTheme = this.darkThemeIcon
    } else {
      this.currentTheme = this.lightThemeIcon
    }
    this.themeSubject.next(this.currentTheme)
  }

  onSubmitTodoForm(event: any, formData: FormGroup) {
    if (event.key === 'Enter' && event.target.value.length >= 1) {
      this.todoList.next(formData.value)
      formData.reset()
    }
  }
}
