import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommandePlatService } from 'src/app/service/commande-plat.service';
import { CommandeService } from 'src/app/service/commande.service';
import { LivraisonService } from 'src/app/service/livraison.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-commande-details',
  templateUrl: './commande-details.component.html',
  styleUrls: ['./commande-details.component.css']
})
export class CommandeDetailsComponent implements OnInit {

  Plat = [];
  commande : any;
  Livreur = []; 
  livraisonForm : FormGroup;
  msg;
  idcommande : any;

   constructor(public fb: FormBuilder,
    private commandePlatService : CommandePlatService , 
    private actRoute: ActivatedRoute, 
    private commandeService : CommandeService, 
    private userService : UserService, 
    private livraisonService : LivraisonService) {
      this.mainForm();
   }

  ngOnInit(): void {
      
      let id = this.actRoute.snapshot.paramMap.get('id');
      this.idcommande = id;
      this.getCommande(id);
      this.getCommandePlat(id);
      this.getLivreur();
      
      console.log(this.commande);
  }

  getCommandePlat(id){
    this.commandePlatService.getDetailsCommande(id).subscribe((data) => {
      this.Plat= data;
     })   
  }

  getCommande(id){
    this.commandeService.getCommandeById(id).subscribe((data) => {
      this.commande = data;
     }) 
  }

  getLivreur(){
    return this.userService.getLivreur().subscribe(
      (res) => { 
        this.Livreur = res;
        console.log(res);

      },
      (err) => {
        this.msg = err;
      }
    );
  }

  attribuerLivreur(){
    if(!this.livraisonForm.valid){
      this.msg = "Veuillez revérifier vos données et réessayez.";
      return false;
    } else {
      let livraison;
      livraison = { 'id_user' : this.livraisonForm.value.livreur , 'id_commande' : this.idcommande};
      return this.livraisonService.createLivraison(livraison).subscribe(
        (res) => { 
          
        },
        (err) => {
          this.msg = err;
        }
      );
    }
  }

  mainForm(){
    this.livraisonForm = this.fb.group({
      livreur: ['' , [Validators.required ]]
    })
  }

  get myForm() {
    return this.livraisonForm.controls;
  }

}
