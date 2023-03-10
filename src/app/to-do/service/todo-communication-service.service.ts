import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TodoCommunicationServiceService {
  public themeSubject: Subject<string>
  constructor() {
    this.themeSubject = new Subject()
  }
}
