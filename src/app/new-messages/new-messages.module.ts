import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewMessagesComponent } from './new-messages.component';
import { MessageBoxComponent } from './message-box/message-box.component';

import { SharedModule } from '../shared/shared.module'
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    NewMessagesComponent,
  ],
  declarations: [NewMessagesComponent, MessageBoxComponent]
})
export class NewMessagesModule { }
