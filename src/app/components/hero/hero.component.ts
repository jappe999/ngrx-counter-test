import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"]
})
export class HeroComponent {
  public hero$: Observable<number>;

  constructor(private store: Store<{ hero: number }>) {
    this.hero$ = store.pipe(select("hero"));
  }

  increment() {
    this.store.dispatch({ type: "[Hero Component] Increment" });
  }

  decrement() {
    this.store.dispatch({ type: "[Hero Component] Decrement" });
  }

  reset() {
    this.store.dispatch({ type: "[Hero Component] Reset" });
  }
}
