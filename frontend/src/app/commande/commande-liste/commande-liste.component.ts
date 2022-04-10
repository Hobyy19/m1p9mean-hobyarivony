import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/service/commande.service';

@Component({
  selector: 'app-commande-liste',
  templateUrl: './commande-liste.component.html',
  styleUrls: ['./commande-liste.component.css']
})
export class CommandeListeComponent implements OnInit {

  commandes ;
  constructor(private commandeService : CommandeService) { }

  ngOnInit(): void {
    this.readCommandes();
  }

  readCommandes(){
    this.commandeService.getCommande().subscribe((data) => {
      this.commandes = data;
    })  
  }
}
