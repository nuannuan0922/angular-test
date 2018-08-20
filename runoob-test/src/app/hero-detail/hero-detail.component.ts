import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }
  
  @Input() hero: Hero;

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    let id = +this.route.snapshot.params['id'];
    this.heroService.getHero(id).then(hero => this.hero = hero);
  }

  save() {
    this.heroService.update(this.hero).then(() => this.goBack());
  }

  goBack() {
    history.back();
  }
}
