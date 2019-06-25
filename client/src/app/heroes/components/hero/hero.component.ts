import { Component, Input, Output, EventEmitter } from '@angular/core';
import IHero from 'src/app/interfaces/IHero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input('hero') hero: IHero = null;

  @Output('remove') removeHero: EventEmitter<IHero> = new EventEmitter<IHero>();
}
