import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core';
import { AppComponent } from './app.component';

import { NewMessagesModule } from './new-messages/new-messages.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule,
    NewMessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
