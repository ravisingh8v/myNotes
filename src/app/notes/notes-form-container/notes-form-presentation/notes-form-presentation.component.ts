import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OverlayService } from 'src/app/core/service/overlay.service';
import { NotesFormPresenterService } from '../notes-form-presenter/notes-form-presenter.service';
import { NotesForm } from '../notes-form.model';

@Component({
  selector: 'app-notes-form-presentation',
  templateUrl: './notes-form-presentation.component.html',
  styleUrls: ['./notes-form-presentation.component.scss']
})
export class NotesFormPresentationComponent implements OnInit {
  @Output() notesList: EventEmitter<NotesForm>;
  public notesForm: FormGroup;
  public isSubmitted: boolean;
  constructor(private _notesPresenterService: NotesFormPresenterService, private _overlayService: OverlayService) {
    this.notesForm = this._notesPresenterService.formBuilder()
    this.notesList = new EventEmitter()
    this.isSubmitted = false;
  }
  ngOnInit(): void {
    this._notesPresenterService.notesList.subscribe((item: NotesForm) => {
      this.notesList.emit(item)
      this._overlayService.overlayRef.detach()
      this.isSubmitted = false
    })
  }
  notesFormSubmit() {
    this.isSubmitted = true
    this._notesPresenterService.submitForm(this.notesForm)
  }
  cancelForm() {
    this._overlayService.overlayRef.detach();
  }
}
