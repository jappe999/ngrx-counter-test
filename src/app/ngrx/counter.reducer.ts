import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./counter.actions";

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, props) => props.count),
  on(decrement, (state, props) => props.count),
  on(reset, (state, props) => props.count)
);
