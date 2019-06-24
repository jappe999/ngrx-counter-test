import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { HeroService } from '../services/hero.service';

@Injectable()
export class HeroEffects {
  constructor(private actions$: Actions, private heroService: HeroService) {}

  incrementHero$ = createEffect(() =>
    this.heroService.getAll().pipe(
      map(hero => ({
        type: '[Hero Component] Increment Success',
        hero
      }))
    )
  );

  decrementHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Hero Component] Decrement'),
      mergeMap(() =>
        this.heroService.decrement().pipe(
          map(hero => ({
            type: '[Hero Component] Decrement Success',
            hero
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  resetHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Hero Component] Reset'),
      mergeMap(() =>
        this.heroService.reset().pipe(
          map(hero => ({
            type: '[Hero Component] Reset Success',
            hero
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
