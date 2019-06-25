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

  constructor(private heroesService: HeroesService) {
    this.heroes$ = this.heroesService.entities$;
    this.loading$ = this.heroesService.loading$;

    this.heroesService.getAll().subscribe();
  }
}
