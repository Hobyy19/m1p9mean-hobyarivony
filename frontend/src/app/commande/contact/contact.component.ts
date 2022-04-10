import { Component, OnInit } from '@angular/core';
import {  NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommandeService } from 'src/app/service/commande.service';
import { CommandePlatService } from 'src/app/service/commande-plat.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  submitted = false;
  contactForm: FormGroup;
  msg;

  constructor(
    public fb: FormBuilder,
    private router : Router,
    private ngZone: NgZone,
    private commandeService: CommandeService,
    private commandePlatService : CommandePlatService
  ) { 
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
          plats[i].id_commande = res._id;
          console.log(plats[i]);
          this.addCommandePlat(plats[i]);
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
