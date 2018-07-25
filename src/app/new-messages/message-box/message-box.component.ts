import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from 'app/core'

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {

  public text: string = '';
  @Output() public onNewMessage = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  btnClicked(){
    console.log('btn');
    console.log('Valor de text: ', this.text);
    this.onNewMessage.emit(this.text);
  }

  changeText(evt: Event){
    this.text = (evt.target as HTMLInputElement).value;
  }

}