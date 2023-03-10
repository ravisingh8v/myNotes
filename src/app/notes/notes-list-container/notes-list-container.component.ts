import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/service/api.service';
import { NotesForm } from '../notes-form-container/notes-form.model';

@Component({
  selector: 'app-notes-list-container',
  templateUrl: './notes-list-container.component.html',
  styleUrls: ['./notes-list-container.component.scss']
})
export class NotesListContainerComponent implements OnInit {
  public notesList: Observable<NotesForm[] | null>
  constructor(private apiService: ApiService) {
    this.notesList = new Observable()
  }
  ngOnInit(): void {
    this.notesList = this.apiService.getNotes()
  }
  deleteItem(id: number) {
    if (id) {
      this.apiService.deleteNote(id).subscribe((res) => {
        this.notesList = this.apiService.getNotes()
      })
    }

  }
}
