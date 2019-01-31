import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero[];
  selectedHero: Hero ; // = this.hero[0];

  constructor( private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) {
  }

  onSelectHero(d: Hero): void {
    this.selectedHero = d;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(HEROES => this.hero = HEROES);
  }
  ngOnInit() {
    this.getHeroes();
  }
}
