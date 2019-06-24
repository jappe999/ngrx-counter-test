import { createReducer, on } from '@ngrx/store';
import { addMany } from './hero.actions';
import IHero from '../interfaces/IHero';

export const initialState: IHero[] = [];

export const heroReducer = createReducer(initialState, on(addMany, (state, props) => [...state, ...props]));
