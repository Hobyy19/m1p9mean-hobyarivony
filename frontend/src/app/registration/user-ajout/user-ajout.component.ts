import { Component, OnInit } from '@angular/core';
import {  NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-user-ajout',
  templateUrl: './user-ajout.component.html',
  styleUrls: ['./user-ajout.component.css']
})
export class UserAjoutComponent implements OnInit {

  submitted = false;
  userForm: FormGroup;

  constructor(
    public fb: FormBuilder,
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
          this.ngZone.run(() => this.router.navigateByUrl('utilisateur/liste'));
        } , 
        error: (e) => {
          console.log(e);
        },
      });
    }
  }

}
