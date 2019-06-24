import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroesService } from '../service/heroes.service';
import IHero from 'src/app/interfaces/IHero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  public loading$: Observable<boolean>;
  public heroes$: Observable<IHero[]>;

  constructor(heroesService: HeroesService) {
    this.heroes$ = heroesService.entities$;
    this.loading$ = heroesService.loading$;

    heroesService.getAll().subscribe();
  }
}
