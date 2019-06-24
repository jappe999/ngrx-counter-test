import { createAction, props } from "@ngrx/store";

export const increment = createAction(
  "[Hero Component] Increment Success",
  props<{ hero: number }>()
);
export const decrement = createAction(
  "[Hero Component] Decrement Success",
  props<{ hero: number }>()
);
export const reset = createAction(
  "[Hero Component] Reset Success",
  props<{ hero: number }>()
);
