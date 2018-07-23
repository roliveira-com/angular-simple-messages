import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Message, ImageMessage } from 'app/core'

@Component({
  selector: 'app-message-area',
  templateUrl: './message-area.component.html',
  styleUrls: ['./message-area.component.scss']
})
export class MessageAreaComponent implements OnInit {

  @Output() messagesChange = new EventEmitter<Message[]>();
  private _messages: Message[];

  constructor() { }

  @Input() set messages(messages: Message[]) {
    this._messages = Array.isArray(messages) ? messages : [];
    this.messagesChange.emit(this._messages);
  }

  get messages() {
    return this._messages;
  }

  ngOnInit() {
    
  }

  isImageMessage(m: Message){
    return  m instanceof ImageMessage
  }

}
