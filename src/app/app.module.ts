import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { HyoujiComponent } from './hyouji/hyouji.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { OmoroComponent } from './omoro/omoro.component';
import { ReplyComponent } from './reply/reply.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    HyoujiComponent,
    OmoroComponent,
    ReplyComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    //HTMLAudioElement
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
