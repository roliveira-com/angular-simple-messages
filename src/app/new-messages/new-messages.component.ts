import { Component, OnInit } from '@angular/core';
import { Message, MessagesService } from 'app/core';

@Component({
  selector: 'app-new-messages',
  templateUrl: './new-messages.component.html',
  styleUrls: ['./new-messages.component.scss']
})
export class NewMessagesComponent implements OnInit {

  public messages: Message[] = [];

  constructor(private messageServices: MessagesService) { }

  ngOnInit() {
    this.messages = this.messageServices.loadMessages();
  }

  onNewMessage(txt:string){
    console.log('onNewMessage', txt);    
    this.messageServices.addMessage(txt).then((m: Message[]) => {
      this.messages = m;
    });
    console.dir(this.messages)
  }

}
