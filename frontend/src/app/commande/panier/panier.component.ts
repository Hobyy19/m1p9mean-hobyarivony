import { Component, OnInit } from '@angular/core';
import { PlatService } from 'src/app/service/plat.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  plat = [];
  constructor(private platService : PlatService) { }

  ngOnInit(): void {
    this.getPlat();
    console.log(this.plat);
  }

  getPlat(){
    this.plat = this.platService.commande;
  }

}
