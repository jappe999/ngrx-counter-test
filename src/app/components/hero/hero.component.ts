import { Component, Input, OnInit } from "@angular/core";
import IHero from "src/app/interfaces/IHero";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"]
})
export class HeroComponent implements OnInit {
  @Input("hero") hero: IHero = null;

  ngOnInit() {}
}
