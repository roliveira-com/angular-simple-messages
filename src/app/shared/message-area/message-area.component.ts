import { Component, OnInit } from '@angular/core';

import { Message } from '../../core'

@Component({
  selector: 'app-message-area',
  templateUrl: './message-area.component.html',
  styleUrls: ['./message-area.component.scss']
})
export class MessageAreaComponent implements OnInit {

  public messages: Message[] = [];

  constructor() { 
    this.messages.push(new Message('Mensagenzinhas'))
   }

  ngOnInit() {
  }

}
