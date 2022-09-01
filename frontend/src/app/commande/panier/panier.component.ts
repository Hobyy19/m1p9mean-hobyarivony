import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatService } from 'src/app/service/plat.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  commandes = [];
  total = 0;
  constructor(private platService : PlatService, private router : Router) { }

  ngOnInit(): void {
    this.getCommande();
    for(let i = 0; i < this.commandes.length ; i++){
      let commande = this.commandes[i];
      this.total += commande.plat.prix_vente*commande.qtt
    }
  }

  getCommande(){
    this.commandes = JSON.parse(sessionStorage.getItem('commande'));
  }

  commander(){
    // if(localStorage.getItem('id')!= null){
      this.router.navigateByUrl('contact');
    // } else {
    //   this.router.navigateByUrl('login');
    // }
  }

}
