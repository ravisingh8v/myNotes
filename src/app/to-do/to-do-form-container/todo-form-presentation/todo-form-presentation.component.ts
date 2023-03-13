import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { TodoCommunicationServiceService } from '../../service/todo-communication-service.service';
import { todoForm } from '../todo-form-model';
import { TodoFormPresenterService } from '../todo-form-presenter/todo-form-presenter.service';

@Component({
  selector: 'app-todo-form-presentation',
  templateUrl: './todo-form-presentation.component.html',
  styleUrls: ['./todo-form-presentation.component.scss']
})
export class TodoFormPresentationComponent implements OnInit {
  @Output() todoList: EventEmitter<todoForm>
  public darkThemeIcon: string;
  public currentTheme: string;
  public isDark: Boolean;
  public todoForm: FormGroup;

  constructor(private _todoFormPresenterService: TodoFormPresenterService, private todoCommunicationService: TodoCommunicationServiceService) {
    this.todoList = new EventEmitter()
    this.darkThemeIcon = "bi-moon-fill"
    this.currentTheme = this.darkThemeIcon;
    this.isDark = false
    this.todoForm = this._todoFormPresenterService.formBuilder()

  }
  ngOnInit(): void {
    // for change theme on clicking theme change icon
    this._todoFormPresenterService.themeSubject.subscribe((res) => {
      this.todoCommunicationService.themesSubject.next(res)
      this.currentTheme = res
      this.isDark = res == 'bi-brightness-high-fill' ? true : false
    })



    // sending todo form data to container
    this._todoFormPresenterService.todoList.subscribe((res) => {
      this.todoCommunicationService.todoList.next(res)
      this.todoList.emit(res)
    })
  }

  // clicking on theme icon
  themeChange() {
    this._todoFormPresenterService.themeChange()
  }


  // submitting form using enter key
  onSubmitTodoForm(event: any) {
    this._todoFormPresenterService.onSubmitTodoForm(event, this.todoForm);
  }

}
