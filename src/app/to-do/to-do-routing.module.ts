import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoComponent } from './to-do.component';
import { TodoListContainerComponent } from './todo-list-container/todo-list-container.component';

const routes: Routes = [{
  path: '', component: ToDoComponent, children: [
    { path: '', redirectTo: 'todo-list', pathMatch: 'full' },
    { path: 'todo-list', component: TodoListContainerComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoRoutingModule { }
