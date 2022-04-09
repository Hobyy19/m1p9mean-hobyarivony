import { Component, OnInit } from '@angular/core';
import { PlatService } from 'src/app/service/plat.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  commandes = [];
  constructor(private platService : PlatService) { }

  ngOnInit(): void {
    this.getCommande();
  }

  getCommande(){
    this.commandes = JSON.parse(sessionStorage.getItem('commande'));
  }

}
