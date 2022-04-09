import { Component, OnInit } from '@angular/core';
import {  NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/entities/user.model';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  userForm: FormGroup;
  email : string = '';
  password : string = '';
  msg : string;

  constructor(
    public fb: FormBuilder,
    private router : Router,
    private ngZone: NgZone,
    private loginService: LoginService
  ) { 
    this.mainForm();
  }

  ngOnInit(): void {
    this.mainForm();
  }

  mainForm(){
    this.userForm = this.fb.group({
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
      this.msg = "Veuillez revérifier vos données et réessayez.";
      return false;
    } else {
      return this.loginService.login(this.userForm.value).subscribe(
        (res) => { 
          if(res.length != 0) {
            this.loginService.setUser(res[0]);
            if(res[0].profil == "Restaurant"){
              this.ngZone.run(() => this.router.navigateByUrl('restaurant/plat/liste'));
            } else if ( res[0].profil == "Client"){
              this.ngZone.run(() => this.router.navigateByUrl(''));
            }
            
          } else {
            this.msg = "Email ou mot de passe invalide.";
          }

        },
        (err) => {
          this.msg = err;
        }
      );
    }
  } 

}
