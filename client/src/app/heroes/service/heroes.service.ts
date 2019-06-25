import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory, EntityActionOptions } from '@ngrx/data';
import IHero from 'src/app/interfaces/IHero';
import { tap, map } from 'rxjs/operators';

const HEROES: IHero[] = [
  { id: 1, name: 'Windstorm' },
  { id: 2, name: 'The Sensational Fighter' },
  { id: 3, name: 'Captain Quill' },
  { id: 4, name: 'The Azure Tiger' },
  { id: 5, name: 'Uber Cat' },
  { id: 6, name: 'The Atom Warrior' }
];

@Injectable({ providedIn: 'root' })
export class HeroesService extends EntityCollectionServiceBase<IHero> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Hero', serviceElementsFactory);
  }

  /**
   * Get all the heroes from the database
   */
  getAll(): Observable<IHero[]> {
    return from([HEROES]).pipe(tap(this.addAllToCache.bind(this)));
  }

  /**
   * Get a hero from the database
   *
   * @param   {number}  id    Hero id
   */
  get(id: number): Observable<IHero | null> {
    const index = HEROES.findIndex(x => x.id === id);

    if (index !== -1) {
      const hero = [HEROES[index]];
      return from(hero).pipe(tap(this.addOneToCache.bind(this)));
    } else {
      throw from(null);
    }
  }

  /**
   * Add a new hero into the database
   *
   * @param   {Hero}   hero  Hero data
   */
  create(hero: IHero) {
    hero.id = HEROES.length - 1;
    return from([hero]).pipe(map(this.addOneToCache.bind(this)));
  }

  /**
   * Update a hero in the database
   *
   * @param   {number}  id    Hero id
   * @param   {Hero}   hero  Hero data
   */
  update(hero: IHero, options?: EntityActionOptions): Observable<IHero> {
    return from([hero]).pipe(map(this.updateOneInCache.bind(this)));
  }

  /**
   * Remove hero from the database
   *
   * @param   {id}  id - The id of the hero to remove
   */
  remove(id: number) {
    const index = HEROES.findIndex(x => x.id === id);

    if (index !== -1) {
      return from([HEROES[index]]).pipe(map(this.removeOneFromCache.bind(this)));
    } else {
      throw from(null);
    }
  }
}
