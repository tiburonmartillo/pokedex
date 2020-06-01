import { RouterModule, Routes } from '@angular/router';
import { DescriptionPokemonCardComponent } from './componentes/description-pokemon-card/description-pokemon-card.component';
import { GridCardsComponent } from './components/grid-cards/grid-cards.component';
import { CardsComponent } from './components/cards/cards.component';
import { BusquedaComponentComponent } from './components/busqueda-component/busqueda-component.component';

const routes: Routes = [
    { path: 'home', component: GridCardsComponent  },
    { path: 'description:id', component: DescriptionPokemonCardComponent  },
    { path: 'cards', component: CardsComponent  },
    { path: 'search', component: BusquedaComponentComponent},
    { path: '**', pathMatch:'full', redirectTo: 'routePath' }
];

export const appRouting = RouterModule.forRoot(routes, {useHash:true});