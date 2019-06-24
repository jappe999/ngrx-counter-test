import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HttpClientModule } from "@angular/common/http";
import { EntityDataModule } from "@ngrx/data";
import { BrowserModule } from "@angular/platform-browser";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { entityConfig } from "./ngrx/entity-metadata";
import { HeroEffects } from "./ngrx/hero.effects";
import { heroReducer } from "./ngrx/hero.reducer";
import { HeroComponent } from "./components/hero/hero.component";
import { HeroesComponent } from "./components/heroes/heroes.component";

@NgModule({
  declarations: [AppComponent, HeroComponent, HeroesComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    EffectsModule.forRoot([HeroEffects]),
    StoreModule.forRoot({ hero: heroReducer }),
    EntityDataModule.forRoot(entityConfig),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
      // logOnly: environment.production // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
