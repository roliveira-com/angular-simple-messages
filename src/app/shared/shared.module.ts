import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageAreaComponent } from './message-area/message-area.component';
import { DistanceToNowPipe } from './distance-to-now.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MessageAreaComponent,
    DistanceToNowPipe
  ],
  declarations: [MessageAreaComponent, DistanceToNowPipe]
})
export class SharedModule { }
