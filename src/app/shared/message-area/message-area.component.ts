import { Component, OnInit, Input } from '@angular/core';

import { Message, ImageMessage } from 'app/core'

@Component({
  selector: 'app-message-area',
  templateUrl: './message-area.component.html',
  styleUrls: ['./message-area.component.scss']
})
export class MessageAreaComponent implements OnInit {

  @Input() public messages: Message[] = [];

  constructor() { 
  }

  ngOnInit() {
    this.messages.push(new ImageMessage('text', undefined, '/assets/images/especializa_logo.jpg'))
  }

  isImageMessage(m: Message){
    return  m instanceof ImageMessage
  }

}
