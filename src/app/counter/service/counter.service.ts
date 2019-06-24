import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  static counter = 0;

  increment() {
    return from([++CounterService.counter]);
  }

  decrement() {
    return from([--CounterService.counter]);
  }

  reset() {
    CounterService.counter = 0;
    return from([0]);
  }
}
