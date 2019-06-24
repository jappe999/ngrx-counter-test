import { createAction, props } from '@ngrx/store';
import IHero from '../interfaces/IHero';

export const addMany = createAction('[Hero Component] Add Many', props<IHero[]>());
export const add = createAction('[Hero Component] Add Success', props<IHero>());
export const update = createAction('[Hero Component] Update Success', props<IHero>());
export const remove = createAction('[Hero Component] Remove Success', props<IHero>());
