import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/service/api.service';
import { NotesForm } from './notes-form.model';

@Component({
  selector: 'app-notes-form-container',
  templateUrl: './notes-form-container.component.html',
  styleUrls: ['./notes-form-container.component.scss']
})
export class NotesFormContainerComponent implements OnInit {

  constructor(private noteApi: ApiService) { }

  ngOnInit(): void {
  }

  getFormNotes(item: NotesForm) {
    this.noteApi.postNotes(item).subscribe((notes: NotesForm) => {
      console.log(notes);
    })

  }
}
