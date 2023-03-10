import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { NotesForm } from '../notes-form-container/notes-form.model';

@Injectable()
export class NotesCommunicationService {
  public editData: BehaviorSubject<number>
  public afterUpdate: Subject<NotesForm[]>
  constructor() {
    this.editData = new BehaviorSubject(0)
    this.afterUpdate = new Subject()
  }
}
