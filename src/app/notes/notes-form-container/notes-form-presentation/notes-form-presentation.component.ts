import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OverlayService } from 'src/app/core/service/overlay.service';
import { NotesCommunicationService } from '../../service/notes-communication.service';
import { NotesFormPresenterService } from '../notes-form-presenter/notes-form-presenter.service';
import { NotesForm } from '../notes-form.model';

@Component({
  selector: 'app-notes-form-presentation',
  templateUrl: './notes-form-presentation.component.html',
  styleUrls: ['./notes-form-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesFormPresentationComponent implements OnInit {
  @Output() notesList: EventEmitter<NotesForm>;
  @Output() editList: EventEmitter<NotesForm>;
  @Output() noteListId: EventEmitter<number>
  @Input() set noteEdit(response: NotesForm | null) {
    if (response) {
      this._editNotes = response
      this.notesForm.patchValue(this._editNotes)


    }
  }
  public get editNotes() {
    return this._editNotes
  }
  public _editNotes!: NotesForm
  public notesForm: FormGroup;
  public isSubmitted: boolean;
  constructor(private route: Router, private _notesPresenterService: NotesFormPresenterService, private _overlayService: OverlayService, private _dataCommunication: NotesCommunicationService) {
    this.notesForm = this._notesPresenterService.formBuilder()
    this.notesList = new EventEmitter()
    this.editList = new EventEmitter()
    this.noteListId = new EventEmitter()
    this.isSubmitted = false;
  }
  ngOnInit(): void {
    this._dataCommunication.editData.subscribe((res) => {
      this.noteListId.emit(res)
    })
    this._notesPresenterService.notesList.subscribe((item: NotesForm) => {
      if (this._editNotes) {
        this.editList.emit(item)
        console.log(item);

      } else {
        this.notesList.emit(item)
      }
      this.isSubmitted = false
    })
  }
  notesFormSubmit() {
    this.isSubmitted = true
    this._notesPresenterService.submitForm(this.notesForm)
    this.route.navigate(['/notes/notes-list'])
    this._overlayService.overlayRef.detach()
  }
  cancelForm() {
    this._overlayService.overlayRef.detach();
  }
}
