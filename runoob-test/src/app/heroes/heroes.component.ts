import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
// import { Heroes } from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  // heroes = Heroes;
  heroes: Hero[];

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  selectedHero: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.getHeroes();
  }

}
