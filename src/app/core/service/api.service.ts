import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NotesForm } from 'src/app/notes/notes-form-container/notes-form.model';
import { environment } from 'src/environment/environment.prod';

@Injectable()
export class ApiService {
  public baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl
  }
  getNotes(): Observable<NotesForm[]> {
    return this.http.get<NotesForm[]>(this.baseUrl)
  }
  postNotes(data: NotesForm): Observable<NotesForm> {
    return this.http.post<NotesForm>(this.baseUrl, data)
  }
  deleteNote(id: number): Observable<number> {
    return this.http.delete<number>(`${this.baseUrl}/${id}`)
  }
  getNoteById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`)
  }
  putData(data: NotesForm, id: number): Observable<NotesForm> {
    return this.http.put<NotesForm>(`${this.baseUrl}/${id}`, data)
  }
}
