import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommandePlatService } from 'src/app/service/commande-plat.service';

@Component({
  selector: 'app-commande-details',
  templateUrl: './commande-details.component.html',
  styleUrls: ['./commande-details.component.css']
})
export class CommandeDetailsComponent implements OnInit {

  Plat = [];

   constructor(private commandePlatService : CommandePlatService , private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
      let id = this.actRoute.snapshot.paramMap.get('id');
      this.getCommandePlat(id);
  }

  getCommandePlat(id){
    this.commandePlatService.getDetailsCommande(id).subscribe((data) => {
      this.Plat= data;
     })   
  }

}
