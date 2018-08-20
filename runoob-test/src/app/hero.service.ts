import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heroes} from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { MessageService } from './message.service';
import { of } from 'rxjs/observable/of';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

  constructor(private http: Http,private messageService: MessageService) { }

  private herosUrl = 'api/heroes';

  getHeroes() : Promise<Hero[]> {
    // return Promise.resolve(Heroes);
    return this.http.get(this.herosUrl)
                    .toPromise()
                    .then(response => response.json().data as Hero[])
                    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('an error occurred: ', error);
    return Promise.reject(error.message || error);
  }

  getHero(id: Number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(Heroes.find(hero => hero.id === id))
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}
