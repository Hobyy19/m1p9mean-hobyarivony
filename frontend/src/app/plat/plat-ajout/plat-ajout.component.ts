import { Component, OnInit } from '@angular/core';
import {  NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PlatService } from 'src/app/service/plat.service';

@Component({
  selector: 'app-plat-ajout',
  templateUrl: './plat-ajout.component.html',
  styleUrls: ['./plat-ajout.component.css']
})
export class PlatAjoutComponent implements OnInit {

  submitted = false;
  platForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router : Router,
    private ngZone: NgZone,
    private platService: PlatService
  ) { 
    this.mainForm();
  }

  ngOnInit(): void {
  }

  mainForm(){
    this.platForm = this.fb.group({
      img: [''], 
      designation: ['' , [Validators.required]],
      categorie: ['' , [Validators.required]],
      prix_brut: ['' , [Validators.required]],
      prix_vente: ['' , [Validators.required]]
    })
  }

  get myForm() {
    return this.platForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(!this.platForm.valid){
      return false;
    } else {
      let plat = this.platForm.value;
      plat.id_user = localStorage.getItem('id');
      return this.platService.createPlat(plat).subscribe({
        complete: () => {
          console.log('Plat inserted'),
          this.ngZone.run(() => this.router.navigateByUrl('login'));
        } , 
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
