import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BarcelonaModule } from './barcelona/barcelona.module';

import { HttpClientModule} from '@angular/common/http';
import {CinemasService} from './cinemas.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarcelonaModule,
    HttpClientModule
  ],
  providers: [CinemasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
