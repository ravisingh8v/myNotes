import { Component, OnInit } from '@angular/core';
import { TodoCommunicationServiceService } from '../../service/todo-communication-service.service';
import { TodoFormPresenterService } from '../todo-form-presenter/todo-form-presenter.service';

@Component({
  selector: 'app-todo-form-presentation',
  templateUrl: './todo-form-presentation.component.html',
  styleUrls: ['./todo-form-presentation.component.scss']
})
export class TodoFormPresentationComponent implements OnInit {
  public darkThemeIcon: string;
  public currentTheme: string;
  public isDark: Boolean;

  constructor(private todoFormPresenterService: TodoFormPresenterService, private todoCommunicationService: TodoCommunicationServiceService) {

    this.darkThemeIcon = "bi-moon-fill"
    this.currentTheme = this.darkThemeIcon;
    this.isDark = false
  }
  ngOnInit(): void {
    this.todoCommunicationService.themeSubject.subscribe((res) => {
      this.currentTheme = res
      this.isDark = res == 'bi-brightness-high-fill' ? true : false
    })
    // this.todoFormPresenterService.themeSubject.subscribe((res) => {
    //   this.currentTheme = res


    // })
  }
  themeChange() {
    return this.todoFormPresenterService.themeChange()
  }
}
