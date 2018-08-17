import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heroes} from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { MessageService } from './message.service';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes() : Promise<Hero[]> {
    return Promise.resolve(Heroes);
  }

  getHero(id: Number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(Heroes.find(hero => hero.id === id))
  }

}
