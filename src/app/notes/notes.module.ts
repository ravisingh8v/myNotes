import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { NotesListContainerComponent } from './notes-list-container/notes-list-container.component';
import { NotesListPresentationComponent } from './notes-list-container/notes-list-presentation/notes-list-presentation.component';
import { NotesFormContainerComponent } from './notes-form-container/notes-form-container.component';
import { NotesFormPresentationComponent } from './notes-form-container/notes-form-presentation/notes-form-presentation.component';
import { OverlayService } from '../core/service/overlay.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NotesCommunicationService } from './service/notes-communication.service';


@NgModule({
  declarations: [
    NotesComponent,
    NotesListContainerComponent,
    NotesListPresentationComponent,
    NotesFormContainerComponent,
    NotesFormPresentationComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class NotesModule { }
