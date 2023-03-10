import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoComponent } from './to-do.component';
import { TodoListContainerComponent } from './todo-list-container/todo-list-container.component';
import { TodoListPresentationComponent } from './todo-list-container/todo-list-presentation/todo-list-presentation.component';
import { ToDoFormContainerComponent } from './to-do-form-container/to-do-form-container.component';
import { TodoFormPresentationComponent } from './to-do-form-container/todo-form-presentation/todo-form-presentation.component';
import { TodoCommunicationServiceService } from './service/todo-communication-service.service';


@NgModule({
  declarations: [
    ToDoComponent,
    TodoListContainerComponent,
    TodoListPresentationComponent,
    ToDoFormContainerComponent,
    TodoFormPresentationComponent
  ],
  imports: [
    CommonModule,
    ToDoRoutingModule
  ],
  providers: [

  ]
})
export class ToDoModule { }
