import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError } from "rxjs/operators";
import { EMPTY } from "rxjs";
import { CounterService } from "../services/counter.service";

@Injectable()
export class CounterEffects {
  constructor(
    private actions$: Actions,
    private counterService: CounterService
  ) {}

  incrementCounter$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Counter Component] Increment"),
      mergeMap(() =>
        this.counterService.increment().pipe(
          map((count) => ({
            type: "[Counter Component] Increment Success",
            count
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  decrementCounter$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Counter Component] Decrement"),
      mergeMap(() =>
        this.counterService.decrement().pipe(
          map((count) => ({
            type: "[Counter Component] Decrement Success",
            count
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  resetCounter$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Counter Component] Reset"),
      mergeMap(() =>
        this.counterService.reset().pipe(
          map((count) => ({
            type: "[Counter Component] Reset Success",
            count
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
