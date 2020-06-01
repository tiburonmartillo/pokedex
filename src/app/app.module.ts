import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// components
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsComponent } from './components/cards/cards.component';
import { SidenavComponent } from './component/share/sidenav/sidenav.component';
import { appRouting } from "./app.routes";


//métodos http
import { HttpClientModule } from "@angular/common/http";

//material components
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { DescriptionPokemonCardComponent } from './componentes/description-pokemon-card/description-pokemon-card.component';
import { GridCardsComponent } from './components/grid-cards/grid-cards.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ChangeColoroTypeDirective } from './direcivas/change-coloro-type.directive';
import { BusquedaComponentComponent } from './components/busqueda-component/busqueda-component.component'; 

@NgModule({
  declarations: [AppComponent, SidenavComponent, CardsComponent, DescriptionPokemonCardComponent, GridCardsComponent, ChangeColoroTypeDirective, BusquedaComponentComponent],
  imports: [
    appRouting,
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    HttpClientModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
