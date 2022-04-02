import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './security/login/login.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PlatListeComponent } from './plat/plat-liste/plat-liste.component';
import { PlatDetailsComponent } from './plat/plat-details/plat-details.component';
import { PanierComponent } from './commande/panier/panier.component';
import { PlatAjoutComponent } from './plat/plat-ajout/plat-ajout.component';
import { PlatRestaurantListeComponent } from './plat/plat-restaurant-liste/plat-restaurant-liste.component';
import { CommandeListeComponent } from './livreur/commande/commande-liste/commande-liste.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    PlatListeComponent,
    PlatDetailsComponent,
    PanierComponent,
    PlatAjoutComponent,
    PlatRestaurantListeComponent,
    CommandeListeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
