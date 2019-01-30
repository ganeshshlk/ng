import { Component, OnInit } from '@angular/core';
import {MsgServiceService} from '../msg-service.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  constructor(private msgservice: MsgServiceService) { }
  message: string[];
  ngOnInit() {
    this.message = this.msgservice.getData();
  }

}
