import { Component, OnInit } from '@angular/core';
import {  NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { CommandeService } from 'src/app/service/commande.service';
import { CommandePlatService } from 'src/app/service/commande-plat.service';
import { ToolsService } from 'src/app/service/tools.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  submitted = false;
  contactForm: UntypedFormGroup;
  msg;

  constructor(
    public fb: UntypedFormBuilder,
    private router : Router,
    private ngZone: NgZone,
    private commandeService: CommandeService,
    private commandePlatService : CommandePlatService,
    private toolsService : ToolsService
  ) { 
    this.toolsService.isConnected();
    this.mainForm();
  }

  ngOnInit(): void {
  }

  mainForm(){
    this.contactForm = this.fb.group({
      lieu: ['' , [Validators.required]], 
      contact: ['' , [Validators.required]],
      date_livraison: ['' , [Validators.required]]
    })
  }

  get myForm() {
    return this.contactForm.controls;
  }

  addCommande(){
    let commande = this.contactForm.value;
    commande.id_user = localStorage.getItem('id');
    commande.statut = 0;

    return this.commandeService.createCommande(commande).subscribe(
      (res) => { 
        let plats = JSON.parse(sessionStorage.getItem('commande'));

        for(let i = 0; i<plats.length; i++){
          let plat = { id_commande : '', id_plat: '', qtt:0 } ;
          plat.id_commande = res._id;
          plat.id_plat = plats[i].plat;
          plat.qtt = plats[i].qtt;

          console.log(plat);
          this.addCommandePlat(plat);
        }

        this.ngZone.run(() => this.router.navigateByUrl('panier'));
      },
      (err) => {
        this.msg = err;
      }
    );
  }

  addCommandePlat(commandePlat){
    return this.commandePlatService.createCommandePlat(commandePlat).subscribe({
      complete: () => {

      } , 
      error: (e) => {
        console.log(e);
      },
    });
    
  }

  onSubmit(){
    this.submitted = true;
    if(!this.contactForm.valid){
      
    } else {
      this.addCommande();
      let plats = JSON.parse(sessionStorage.getItem('commande'));

      for(let i = 0; i<plats.length; i++){
        this.addCommandePlat(plats[i]);
      }
      this.ngZone.run(() => this.router.navigateByUrl('login'));
    }
  }

}
