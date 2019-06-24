import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./hero.actions";

export const initialState = 0;

export const heroReducer = createReducer(
  initialState,
  on(increment, (state, props) => props.hero),
  on(decrement, (state, props) => props.hero),
  on(reset, (state, props) => props.hero)
);
