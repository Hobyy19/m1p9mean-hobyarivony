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

  // onSubmit(){
  //   this.submitted = true;
  //   if(!this.userForm.valid){
  //     return false;
  //   } else {
  //     return this.loginService.login(this.userForm.value).subscribe({
  //       complete: () => {
  //         this.loginService.setUser(this.userForm.value);
  //         this.ngZone.run(() => this.router.navigateByUrl('restaurant/plat/liste'));
  //       } , 
  //       error: (e) => {
  //         console.log(e);
  //       },
  //     });
  //   }
  // }

  onSubmit(){
   
    this.submitted = true;
    if(!this.userForm.valid){
      this.msg = "Veuillez revérifier vos données et réessayez.";
      return false;
    } else {
      return this.loginService.login(this.userForm.value).subscribe((data) => {
        console.log("DATA : "+data);
        console.log(data.email);
        if (data.email){
          console.log("Coucou");
          this.loginService.setUser(data);
          this.ngZone.run(() => this.router.navigateByUrl('restaurant/plat/liste'));
        } else {
          this.msg = "Email ou mot de passe invalide.";
        }
      });
    }
  }

  // this.apiService.getEmployee(id).subscribe((data) => {
  //   this.editForm.setValue({
  //     name: data['name'],
  //     email: data['email'],
  //     designation: data['designation'],
  //     phoneNumber: data['phoneNumber'],
  //   });
  // });

  //   getPlat(id){
  //   this.platService.getPlat(id).subscribe((data) => {
  //     this.plat = data;
  //    })   
  // }

}
