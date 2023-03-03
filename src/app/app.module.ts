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
  providers: [ApiService, OverlayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
