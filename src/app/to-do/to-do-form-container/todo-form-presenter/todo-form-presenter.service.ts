import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TodoCommunicationServiceService } from '../../service/todo-communication-service.service';

@Injectable({
  providedIn: 'root'
})
export class TodoFormPresenterService {
  public lightThemeIcon: string;
  public darkThemeIcon: string;
  public currentTheme: string;
  public themeSubject: Subject<string>
  constructor(private todoCommunicationService: TodoCommunicationServiceService) {
    this.themeSubject = new Subject()
    this.lightThemeIcon = "bi-brightness-high-fill"
    this.darkThemeIcon = 'bi-moon-fill'
    this.currentTheme = '';
  }
  themeChange() {
    if (this.currentTheme == this.lightThemeIcon) {
      this.currentTheme = this.darkThemeIcon
    } else {
      this.currentTheme = this.lightThemeIcon
    }
    this.todoCommunicationService.themeSubject.next(this.currentTheme)
  }
}
