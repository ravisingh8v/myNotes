import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NotesForm } from 'src/app/notes/notes-form-container/notes-form.model';
import { todoForm } from 'src/app/to-do/to-do-form-container/todo-form-model';
import { environment } from 'src/environment/environment.prod';

@Injectable()
export class ApiService {
  public notesBaseUrl: string;
  public todoBaseUrl: string;
  constructor(private http: HttpClient) {
    this.notesBaseUrl = environment.notesUrl
    this.todoBaseUrl = environment.todoUrl
  }

  // notes api integration
  getNotes(): Observable<NotesForm[]> {
    return this.http.get<NotesForm[]>(this.notesBaseUrl)
  }
  postNotes(data: NotesForm): Observable<NotesForm> {
    return this.http.post<NotesForm>(this.notesBaseUrl, data)
  }
  deleteNote(id: number): Observable<number> {
    return this.http.delete<number>(`${this.notesBaseUrl}/${id}`)
  }
  getNoteById(id: number): Observable<any> {
    return this.http.get<any>(`${this.notesBaseUrl}/${id}`)
  }
  putData(data: NotesForm, id: number): Observable<NotesForm> {
    return this.http.put<NotesForm>(`${this.notesBaseUrl}/${id}`, data)
  }

  // Todo Api Integration
  getTodoList(): Observable<todoForm[]> {
    return this.http.get<todoForm[]>(this.todoBaseUrl)
  }
  postTodoList(data: todoForm): Observable<todoForm> {
    return this.http.post<todoForm>(this.todoBaseUrl, data)

  }
  deleteTodo(id: number): Observable<number> {
    return this.http.delete<number>(`${this.todoBaseUrl}/${id}`)
  }
}
