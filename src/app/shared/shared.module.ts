import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageAreaComponent } from './message-area/message-area.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MessageAreaComponent
  ],
  declarations: [MessageAreaComponent]
})
export class SharedModule { }
