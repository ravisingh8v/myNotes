import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesListContainerComponent } from './notes-list-container/notes-list-container.component';
import { NotesComponent } from './notes.component';

const routes: Routes = [{
  path: '', component: NotesComponent, children: [
    { path: '', pathMatch: "full", redirectTo: 'notes-list' },
    { path: 'notes-list', component: NotesListContainerComponent }, { path: 'notes-form', component: NotesListContainerComponent },
    { path: 'notes-list/:id', component: NotesListContainerComponent },

  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
