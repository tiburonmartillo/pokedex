import { RouterModule, Routes } from '@angular/router';
import { DescriptionPokemonCardComponent } from './componentes/description-pokemon-card/description-pokemon-card.component';
import { GridCardsComponent } from './components/grid-cards/grid-cards.component';
import { CardsComponent } from './components/cards/cards.component';

const routes: Routes = [
    { path: 'home', component: GridCardsComponent  },
    { path: 'description', component: DescriptionPokemonCardComponent  },
    { path: 'cards', component: CardsComponent  },
    { path: '**', pathMatch:'full', redirectTo: 'routePath' }
];

export const appRouting = RouterModule.forRoot(routes);