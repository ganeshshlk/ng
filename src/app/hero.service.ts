import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock.heroes';
import { Observable, of } from 'rxjs';
import {MsgServiceService} from './msg-service.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private msgService: MsgServiceService, private http: HttpClient) { }
  private heroesUrl = 'api/heroes';
  getHeroes(): Observable<Hero[]> {
    this.log('updated');
    return this.http.get<Hero[]>(this.heroesUrl);
    // return of(HEROES);
  }
  log(msg: string) {
    this.msgService.setData(msg);
  }
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.log(`${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
