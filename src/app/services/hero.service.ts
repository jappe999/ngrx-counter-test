import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import Hero from '../interfaces/IHero';

const HEROES: Hero[] = [
  { id: 1, name: 'Windstorm' },
  { id: 2, name: 'The Sensational Fighter' },
  { id: 3, name: 'Captain Quill' },
  { id: 4, name: 'The Azure Tiger' },
  { id: 5, name: 'Uber Cat' },
  { id: 6, name: 'The Atom Warrior' }
];

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  static hero = 0;

  /**
   * Get all the heroes from the database
   */
  getAll(): Observable<Hero[]> {
    return from([HEROES]);
  }

  /**
   * Get a hero from the database
   *
   * @param   {number}  id    Hero id
   */
  get(id: number): Observable<Hero> | Observable<null> {
    const index = HEROES.findIndex(x => x.id === id);

    if (index !== -1) {
      return from([HEROES[index]]);
    } else {
      throw from(null);
    }
  }

  /**
   * Add a new hero into the database
   *
   * @param   {Hero}   hero  Hero data
   */
  create(hero: Hero) {
    HEROES.push(hero);
    HEROES[HEROES.length - 1].id = HEROES.length - 1;

    return from([hero]);
  }

  /**
   * Update a hero in the database
   *
   * @param   {number}  id    Hero id
   * @param   {Hero}   hero  Hero data
   */
  update(id: number, hero: Hero) {
    const index = HEROES.findIndex(x => x.id === id);

    HEROES[id] = hero;

    if (index !== -1) {
      return from([HEROES[index]]);
    } else {
      throw from(null);
    }
  }

  /**
   * Remove hero from the database
   *
   * @param   {id}  id - The id of the hero to remove
   */
  remove(id: number) {
    const index = HEROES.findIndex(x => x.id === id);

    if (index !== -1) {
      return from([HEROES[index]]);
    } else {
      throw from(null);
    }
  }

  increment() {
    return from([++HeroService.hero]);
  }

  decrement() {
    return from([--HeroService.hero]);
  }

  reset() {
    HeroService.hero = 0;
    return from([0]);
  }
}
