import { Routes } from '@angular/router';
import { HistoriqueComponent } from './historique/historique.component';
import { ParametreComponent } from './parametre/parametre.component';
import { AccueilComponent } from './accueil/accueil.component';

export const routes: Routes = [
    { path: 'accueil', component: AccueilComponent },
  { path: 'historique', component: HistoriqueComponent },
  { path: 'parametre', component: ParametreComponent },
  { path: '**', component: AccueilComponent, pathMatch: 'full'},
];

