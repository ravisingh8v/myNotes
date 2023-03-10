import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NotesCommunicationService } from '../../service/notes-communication.service';

@Injectable({
  providedIn: 'root'
})
export class NotesListPresenterService {
  public deleteItem: Subject<number>

  constructor(private noteCommunicationService: NotesCommunicationService) {
    this.deleteItem = new Subject()

  }

  deleteList(item: number) {
    this.deleteItem.next(item)
  }
  edit(id: number) {
    this.noteCommunicationService.editData.next(id)

  }
}
