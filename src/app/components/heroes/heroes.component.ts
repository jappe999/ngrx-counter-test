import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import IHero from "src/app/interfaces/IHero";
import Hero from "src/app/classes/hero";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"]
})
export class HeroesComponent implements OnInit {
  heroes$: Observable<IHero[]> = this.store.select((state) => state.heroes);

  powers = ["Really Smart", "Super Flexible", "Super Hot", "Weather Changer"];
  model = new Hero();
  submitted = false;

  constructor(private store: Store<{ heroes: IHero[] }>) {}

  ngOnInit() {
    this.store.dispatch({ type: "[Hero Component] FetchHeroes" });
  }

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.model = new Hero();
  }
}
