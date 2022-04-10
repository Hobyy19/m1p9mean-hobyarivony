import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/service/commande.service';
import { ToolsService } from 'src/app/service/tools.service';

@Component({
  selector: 'app-user-commande',
  templateUrl: './user-commande.component.html',
  styleUrls: ['./user-commande.component.css']
})
export class UserCommandeComponent implements OnInit {

  commandes = [];

  constructor(private commandeService : CommandeService, private toolsService : ToolsService) { 
    this.toolsService.isConnected();
  }

  ngOnInit(): void {
    this.readCommandeUser();
  }

  readCommandeUser(){
    this.commandeService.getCommandeUser().subscribe((data) => {
      this.commandes = data;
     })   
  }

  removeCommande(commande, index) {
    if(window.confirm('Etes vous sûr de vouloir supprimer cet élément?')) {
        this.commandeService.deleteCommande(commande._id).subscribe((data) => {
          this.commandes.splice(index, 1);
        }
      )    
    }
  }

}
