import { Component, OnInit } from '@angular/core';
import { TodoCommunicationServiceService } from '../../service/todo-communication-service.service';

@Component({
  selector: 'app-todo-list-presentation',
  templateUrl: './todo-list-presentation.component.html',
  styleUrls: ['./todo-list-presentation.component.scss']
})
export class TodoListPresentationComponent implements OnInit {
  public isDark: boolean;
  constructor(private todoCommunicationService: TodoCommunicationServiceService) {
    this.isDark = false;
  }
  ngOnInit(): void {
    this.todoCommunicationService.themeSubject.subscribe((res) => {
      this.isDark = res == 'bi-brightness-high-fill' ? true : false;
    })
  }


}
