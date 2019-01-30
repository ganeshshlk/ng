import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsgServiceService {
  constructor() { }
  msgs: string[] = [];
  getData(): string[] {
    return this.msgs;
  }
  setData(d: string) {
    this.msgs.push(d);
  }
}
