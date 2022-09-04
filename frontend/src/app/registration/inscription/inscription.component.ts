import { Component, OnInit } from '@angular/core';
import {  NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  submitted = false;
  userForm: UntypedFormGroup;

  constructor(
    public fb: UntypedFormBuilder,
    private router : Router,
    private ngZone: NgZone,
    private loginService: LoginService
  ) { 
    this.mainForm();
  }

  ngOnInit(): void {
  }

  mainForm(){
    this.userForm = this.fb.group({
      profil: ['' , [Validators.required]],
      nom: ['' , [Validators.required]],
      email: ['' , [Validators.required , Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),]],
      password: ['' , [Validators.required]]
    })
  }

  get myForm() {
    return this.userForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(!this.userForm.valid){
      return false;
    } else {
      return this.loginService.createUser(this.userForm.value).subscribe({
        complete: () => {
          console.log('User inserted'),
          this.ngZone.run(() => this.router.navigateByUrl('login'));
        } , 
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
