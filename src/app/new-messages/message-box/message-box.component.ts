import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {

  public text: string = 'Digite sua mensagem';

  constructor() { }

  ngOnInit() {
  }

  btnClicked(){
    console.log('btn');
    console.log('Valor de text ', this.text);
  }

  changeText(evt: Event){
    this.text = (evt.target as HTMLInputElement).value;
  }

}