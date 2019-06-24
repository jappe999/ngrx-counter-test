import { createAction, props } from "@ngrx/store";

export const increment = createAction(
  "[Counter Component] Increment Success",
  props<{ count: number }>()
);
export const decrement = createAction(
  "[Counter Component] Decrement Success",
  props<{ count: number }>()
);
export const reset = createAction(
  "[Counter Component] Reset Success",
  props<{ count: number }>()
);
