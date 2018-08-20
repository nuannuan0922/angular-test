import { Component, OnInit } from '@angular/core';
import { Heroes } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heroes: Hero[];

  selectedHero: Hero;

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  clickHandler(hero): void {
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.getHeroes();
  }

}
