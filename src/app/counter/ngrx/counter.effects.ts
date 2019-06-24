import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { CounterService } from '../service/counter.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class CounterEffects {
  incrementCounter$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Counter Component] Increment'),
      mergeMap(() =>
        this.counterService.increment().pipe(
          map(counter => ({ type: '[Counter Component] Increment Success', counter })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  decrementCounter$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Counter Component] Decrement'),
      mergeMap(() =>
        this.counterService.decrement().pipe(
          map(counter => ({ type: '[Counter Component] Decrement Success', counter })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  resetCounter$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Counter Component] Reset'),
      mergeMap(() =>
        this.counterService.reset().pipe(
          map(counter => ({ type: '[Counter Component] Reset Success', counter })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private counterService: CounterService) {}
}
