import { createEffect, Actions, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { EMPTY } from "rxjs";

import { HeroService } from "../services/hero.service";

@Injectable()
export class HeroEffects {
  constructor(private actions$: Actions, private heroService: HeroService) {}

  fetchHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Hero Component] FetchHeroes"),
      mergeMap(() =>
        this.heroService.getAll().pipe(
          map((hero) => ({
            type: "[Hero Component] FetchHeroes Success",
            hero
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
