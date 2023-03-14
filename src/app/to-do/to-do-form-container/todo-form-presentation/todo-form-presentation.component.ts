import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() listCurrentId: EventEmitter<number>
  @Output() editTodo: EventEmitter<todoForm>
  @Input() set currentTodoList(res: todoForm | null) {
    if (res) {
      this._currentTodo = res;
      this.todoForm.patchValue(this._currentTodo)
    }
  }
  public get currentTodo(): todoForm {
    return this._currentTodo
  }

  public darkThemeIcon: string;
  public currentTheme: string;
  public isDark: Boolean;
  public todoForm: FormGroup;
  private _currentTodo!: todoForm;
  constructor(private _todoFormPresenterService: TodoFormPresenterService, private todoCommunicationService: TodoCommunicationServiceService) {
    this.todoList = new EventEmitter()
    this.editTodo = new EventEmitter()
    this.listCurrentId = new EventEmitter()

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
      if (this.currentTodo) {
        console.log(this.currentTodo);
        this.todoCommunicationService.atferUpdateTodo.next(res)
        this.editTodo.emit(res)
        this.todoForm.reset()
      } else {
        console.log('worked');

        this.todoCommunicationService.todoList.next(res)
        this.todoList.emit(res)
      }
    })
    // for getting list id
    this.todoCommunicationService.getTodoById.subscribe((id) => {
      this.listCurrentId.emit(id);
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
