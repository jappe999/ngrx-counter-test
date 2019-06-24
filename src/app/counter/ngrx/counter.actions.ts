import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment Success', props<{ counter: number }>());
export const decrement = createAction('[Counter Component] Decrement Success', props<{ counter: number }>());
export const reset = createAction('[Counter Component] Reset Success', props<{ counter: number }>());
