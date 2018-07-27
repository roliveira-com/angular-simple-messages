import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../core';
import { Message } from '../core';

@Component({
  selector: 'app-old-messages',
  templateUrl: './old-messages.component.html',
  styleUrls: ['./old-messages.component.scss']
})
export class OldMessagesComponent implements OnInit {

  public messages: Message[];

  constructor(private messageService: MessagesService) {
    this.messages = this.messageService.loadMessages()
  }

  ngOnInit() {
  }

  

}
