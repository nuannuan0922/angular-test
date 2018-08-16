import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heroes} from './mock-heroes';
import { Observable, of } from 'rxjs/Observable';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes() : Promise<Hero[]> {
    return Promise.resolve(Heroes);
  }

  getHero(id: Number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}
