import { Injectable } from "@angular/core";
import { from } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CounterService {
  static count = 0;

  increment() {
    return from([++CounterService.count]);
  }

  decrement() {
    return from([--CounterService.count]);
  }

  reset() {
    CounterService.count = 0;
    return from([0]);
  }
}
