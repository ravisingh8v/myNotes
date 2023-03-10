import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OverlayService } from 'src/app/core/service/overlay.service';
import { NotesFormContainerComponent } from '../../notes-form-container/notes-form-container.component';
import { NotesForm } from '../../notes-form-container/notes-form.model';
import { NotesCommunicationService } from '../../service/notes-communication.service';
import { NotesListPresenterService } from '../notes-list-presenter/notes-list-presenter.service';

@Component({
  selector: 'app-notes-list-presentation',
  templateUrl: './notes-list-presentation.component.html',
  styleUrls: ['./notes-list-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesListPresentationComponent implements OnInit, AfterViewInit {
  @Output() deleteItem: EventEmitter<number>
  @Input() set notesList(list: NotesForm[] | null) {
    if (list) {
      this._notesList = list
    }
  }
  get notesList() {
    return this._notesList
  }
  private _notesList!: NotesForm[];
  constructor(private overlay: OverlayService, private noteListPresenterService: NotesListPresenterService, private _dataCommunication: NotesCommunicationService, private route: Router) {
    this.deleteItem = new EventEmitter()
  }
  ngOnInit(): void {
    this.noteListPresenterService.deleteItem.subscribe((id: number) => {
      this.deleteItem.emit(id)
    })

    this._dataCommunication.afterUpdate.subscribe((res) => {
      this._notesList = res
    })
  }
  ngAfterViewInit(): void {

  }
  openForm() {
    this.overlay.openDialogue(NotesFormContainerComponent)
  }
  deleteList(id: number) {
    this.noteListPresenterService.deleteList(id)
  }
  editData(id: number) {
    this.noteListPresenterService.edit(id)
    this.route.navigate([`/notes/notes-list/${id}`])
    this.overlay.openDialogue(NotesFormContainerComponent)
  }
}
