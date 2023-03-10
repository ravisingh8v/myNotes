import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { NotesForm } from '../notes-form.model';

@Injectable({
  providedIn: 'root'
})
export class NotesFormPresenterService {
  public notesList: Subject<NotesForm>

  constructor(private _formbuilder: FormBuilder) {
    this.notesList = new Subject()
  }

  formBuilder(): FormGroup {
    return this._formbuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  submitForm(employee: FormGroup) {
    if (employee.valid) {
      this.notesList.next(employee.value)

    }
  }

}
