import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../ngrx/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  public count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch({ type: '[Counter Component] Increment' });
  }

  decrement() {
    this.store.dispatch({ type: '[Counter Component] Decrement' });
  }

  reset() {
    this.store.dispatch({ type: '[Counter Component] Reset' });
  }
}
