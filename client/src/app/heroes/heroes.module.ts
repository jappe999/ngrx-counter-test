import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeroesComponent, HeroComponent],
  imports: [CommonModule, FormsModule],
  exports: [HeroesComponent]
})
export class HeroesModule {}
