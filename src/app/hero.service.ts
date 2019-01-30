import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock.heroes';
import { Observable, of } from 'rxjs';
import {MsgServiceService} from './msg-service.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private msgService: MsgServiceService) { }

  getHeroes(): Observable<Hero[]> {
    this.msgService.setData('updated');
    return of(HEROES);
  }
}
