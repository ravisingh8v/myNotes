import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http'

import { ReactiveFormsModule } from '@angular/forms'
import { ApiService } from './core/service/api.service';
import { OverlayService } from './core/service/overlay.service';
import { NotesCommunicationService } from './notes/service/notes-communication.service';
import { TodoCommunicationServiceService } from './to-do/service/todo-communication-service.service';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NgbModule,
    HttpClientModule,

  ],
  providers: [ApiService, OverlayService, NotesCommunicationService, TodoCommunicationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
