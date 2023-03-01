import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { NotesListContainerComponent } from './notes-list-container/notes-list-container.component';
import { NotesListPresentationComponent } from './notes-list-container/notes-list-presentation/notes-list-presentation.component';


@NgModule({
  declarations: [
    NotesComponent,
    NotesListContainerComponent,
    NotesListPresentationComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule
  ]
})
export class NotesModule { }
