import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import IHero from "../interfaces/IHero";

const HEROES: IHero[] = [
  { id: 1, name: "Windstorm", power: "" },
  { id: 2, name: "The Sensational Fighter", power: "" },
  { id: 3, name: "Captain Quill", power: "" },
  { id: 4, name: "The Azure Tiger", power: "" },
  { id: 5, name: "Uber Cat", power: "" },
  { id: 6, name: "The Atom Warrior", power: "" }
];

@Injectable({
  providedIn: "root"
})
export class HeroService {
  static hero = 0;

  /**
   * Get all the heroes from the database
   */
  getAll(): Observable<IHero[]> {
    return from([HEROES]);
  }

  /**
   * Get a hero from the database
   *
   * @param   {number}  id    Hero id
   */
  get(id: number): Observable<IHero> | Observable<null> {
    const index = HEROES.findIndex((x) => x.id === id);

    if (index !== -1) {
      return from([HEROES[index]]);
    } else {
      throw from(null);
    }
  }

  /**
   * Add a new hero into the database
   *
   * @param   {IHero}   hero  Hero data
   */
  create(hero: IHero) {
    HEROES.push(hero);
    HEROES[HEROES.length - 1].id = HEROES.length - 1;

    return from([hero]);
  }

  /**
   * Update a hero in the database
   *
   * @param   {number}  id    Hero id
   * @param   {IHero}   hero  Hero data
   */
  update(id: number, hero: IHero) {
    const index = HEROES.findIndex((x) => x.id === id);

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
    const index = HEROES.findIndex((x) => x.id === id);

    if (index !== -1) {
      return from([HEROES[index]]);
    } else {
      throw from(null);
    }
  }
}
