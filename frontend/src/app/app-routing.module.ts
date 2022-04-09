import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './security/login/login.component';
import { InscriptionComponent } from './registration/inscription/inscription.component';

import { PlatListeComponent } from './plat/plat-liste/plat-liste.component';
import { PlatDetailsComponent } from './plat/plat-details/plat-details.component';
import { PlatAjoutComponent } from './plat/plat-ajout/plat-ajout.component';
import { PlatRestaurantListeComponent } from './plat/plat-restaurant-liste/plat-restaurant-liste.component';

import { PanierComponent } from './commande/panier/panier.component';

import { CommandeListeComponent } from './livreur/commande/commande-liste/commande-liste.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'login' , component: LoginComponent },
  { path: 'inscription' , component: InscriptionComponent },
  { path: 'plat/liste' , component: PlatListeComponent },
  { path: 'plat/details/:id' , component: PlatDetailsComponent },
  { path: 'restaurant/plat/ajout' , component: PlatAjoutComponent },
  { path: 'restaurant/plat/liste' , component: PlatRestaurantListeComponent },
  { path: 'livreur/commande/liste' , component: CommandeListeComponent },
  { path: 'panier' , component: PanierComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }