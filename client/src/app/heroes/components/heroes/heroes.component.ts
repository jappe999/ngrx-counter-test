import { Component } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { HeroesService } from 'src/app/heroes/service/heroes.service';
import IHero from 'src/app/interfaces/IHero';
import { EntityAction } from '@ngrx/data';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  public loading$: Observable<boolean>;
  public heroes$: Observable<IHero[]>;
  public error$: Observable<any>;

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer', 'Being a total bitch about everything'];
  model: IHero = <IHero>{};
  submitted = false;

  constructor(private heroesService: HeroesService) {
    this.heroes$ = this.heroesService.entities$;
    this.loading$ = this.heroesService.loading$;
    const error: BehaviorSubject<string> = new BehaviorSubject<string>('');
    this.error$ = error.asObservable();

    this.heroesService
      .getAll()
      .pipe(
        catchError(e => {
          error.next(`${e.status}: ${e.statusText}`);
          return throwError(e);
        })
      )
      .subscribe();
  }

  newHero() {
    this.model = <IHero>{};
  }

  addHero(event: Event) {
    event.preventDefault();
    this.submitted = true;
    this.heroesService.create(this.model).subscribe();
  }

  removeHero(hero: IHero) {
    this.heroesService.remove(hero).subscribe();
  }
}
