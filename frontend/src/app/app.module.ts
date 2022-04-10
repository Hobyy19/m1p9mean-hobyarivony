import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';


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
import { InscriptionComponent } from './registration/inscription/inscription.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { UtilisateurListeComponent } from './utilisateur/utilisateur-liste/utilisateur-liste.component';
import { ContactComponent } from './commande/contact/contact.component';
import { UserCommandeComponent } from './commande/user-commande/user-commande.component';
import { UserAjoutComponent } from './registration/user-ajout/user-ajout.component';

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
    CommandeListeComponent,
    InscriptionComponent,
    SidebarComponent,
    UtilisateurListeComponent,
    ContactComponent,
    UserCommandeComponent,
    UserAjoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
