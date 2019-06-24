import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.scss"]
})
export class CounterComponent implements OnInit {
  count$: Observable<number> = this.store.select((state) => state.count);

  constructor(private store: Store<{ count: number }>) {}

  ngOnInit() {
    this.store.dispatch({ type: "[Movies] Load Movies" });
  }

  increment() {
    this.store.dispatch({ type: "[Counter Component] Increment" });
  }

  decrement() {
    this.store.dispatch({ type: "[Counter Component] Decrement" });
  }

  reset() {
    this.store.dispatch({ type: "[Counter Component] Reset" });
  }
}
