import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HttpClientModule } from "@angular/common/http";
import { EntityDataModule } from "@ngrx/data";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { NgModule } from "@angular/core";

// Modules
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "../app.component";

// NgRx
import { entityConfig } from "../ngrx/entity-metadata";
import { counterReducer } from "../ngrx/counter.reducer";
import { CounterEffects } from "../ngrx/counter.effects";
import { heroReducer } from "../ngrx/hero.reducer";
import { HeroEffects } from "../ngrx/hero.effects";

// Components
import { CounterComponent } from "../components/counter/counter.component";
import { HeroesComponent } from "../components/heroes/heroes.component";
import { HeroComponent } from "../components/hero/hero.component";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HeroComponent,
    HeroesComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    EffectsModule.forRoot([HeroEffects, CounterEffects]),
    StoreModule.forRoot({ hero: heroReducer, counter: counterReducer }),
    EntityDataModule.forRoot(entityConfig),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
