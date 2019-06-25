import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory, EntityActionOptions } from '@ngrx/data';
import IHero from 'src/app/interfaces/IHero';
import { tap, delay, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HeroesService extends EntityCollectionServiceBase<IHero> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('Hero', serviceElementsFactory);
  }

  /**
   * Get all the heroes from the database
   */
  getAll(): Observable<IHero[]> {
    this.setLoading(true);
    return this.http.get<IHero[]>('http://localhost:3000/api/heros').pipe(
      delay(1000),
      tap(this.addAllToCache.bind(this)),
      catchError(error => {
        this.setLoading(false);
        return throwError(error);
      })
    );
  }

  /**
   * Get a hero from the database
   *
   * @param   {number}  id    Hero id
   */
  get(id: number): Observable<IHero> {
    this.setLoading(true);
    return this.http.get<IHero>(`http://localhost:3000/api/hero/${id}`).pipe(
      delay(1000),
      tap(this.addOneToCache.bind(this)),
      catchError(error => {
        this.setLoading(false);
        return throwError(error);
      })
    );
  }

  /**
   * Add a new hero into the database
   *
   * @param   {Hero}   hero  Hero data
   */
  create(hero: IHero) {
    this.setLoading(true);
    return this.http.post<IHero>('http://localhost:3000/api/hero', hero).pipe(
      delay(1000),
      tap(this.addOneToCache.bind(this)),
      catchError(error => {
        this.setLoading(false);
        return throwError(error);
      })
    );
  }

  /**
   * Update a hero in the database
   *
   * @param   {number}  id    Hero id
   * @param   {Hero}   hero  Hero data
   */
  update(hero: IHero, options?: EntityActionOptions): Observable<IHero> {
    this.setLoading(true);
    return this.http.put<IHero>('http://localhost:3000/api/hero', hero).pipe(
      delay(1000),
      tap(this.updateOneInCache.bind(this)),
      catchError(error => {
        this.setLoading(false);
        return throwError(error);
      })
    );
  }

  /**
   * Remove hero from the database
   *
   * @param   {id}  id - The id of the hero to remove
   */
  remove(hero: IHero): Observable<void> {
    this.setLoading(true);
    return this.http.delete<void>(`http://localhost:3000/api/hero/${hero.id}`).pipe(
      delay(1000),
      tap(() => this.removeOneFromCache(hero)),
      catchError(error => {
        this.setLoading(false);
        return throwError(error);
      })
    );
  }
}
