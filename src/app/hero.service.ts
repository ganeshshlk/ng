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
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.msgService.setData(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
