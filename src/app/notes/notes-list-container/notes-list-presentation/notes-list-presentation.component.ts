import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { OverlayService } from 'src/app/core/service/overlay.service';
import { NotesFormContainerComponent } from '../../notes-form-container/notes-form-container.component';
import { NotesForm } from '../../notes-form-container/notes-form.model';

@Component({
  selector: 'app-notes-list-presentation',
  templateUrl: './notes-list-presentation.component.html',
  styleUrls: ['./notes-list-presentation.component.scss']
})
export class NotesListPresentationComponent implements OnInit, AfterViewInit {
  @ViewChild('listCard') listcard!: ElementRef<HTMLElement>;
  @Input() set notesList(list: NotesForm[] | null) {
    if (list) {
      this._notesList = list
    }
  }
  get notesList() {
    return this._notesList
  }
  private _notesList!: NotesForm[];
  constructor(private overlay: OverlayService) {

  }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    // console.log(this.listcard);
    // if (this.listcard.nativeElement.style) { }

  }
  openForm() {
    this.overlay.openDialogue(NotesFormContainerComponent)
  }
}
