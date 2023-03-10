import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/service/api.service';
import { NotesCommunicationService } from '../service/notes-communication.service';
import { NotesForm } from './notes-form.model';

@Component({
  selector: 'app-notes-form-container',
  templateUrl: './notes-form-container.component.html',
  styleUrls: ['./notes-form-container.component.scss']
})
export class NotesFormContainerComponent implements OnInit {
  public noteEdit: Observable<NotesForm>
  public id: number;
  constructor(private noteApi: ApiService, private dataCommunication: NotesCommunicationService) {
    this.noteEdit = new Observable()
    this.id = 0;
  }

  ngOnInit(): void {
  }

  getFormNotes(item: NotesForm) {
    this.noteApi.postNotes(item).subscribe((notes: NotesForm) => {
      console.log(notes);
    })
  }
  editNote(id: number) {
    if (id) {
      this.id = id
      this.noteEdit = this.noteApi.getNoteById(id)
    }
  }
  updatedata(newnote: NotesForm) {
    this.noteApi.putData(newnote, this.id).subscribe((res) => {
      this.dataCommunication.editData.next(0)
    })
  }
}
