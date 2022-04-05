import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/entities/user.model';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm!: FormGroup;
  email : string = '';
  password : string = '';

  constructor(private loginService: LoginServiceService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(){
    const user = new User(this.userForm.value['email'], this.userForm.value['password'] , '');
    this.loginService.add(user);
  }

  private initForm(){
    this.userForm = new FormGroup({
      email : new FormControl(this.email , Validators.required),
      password : new FormControl(this.password , Validators.required)
    })
  }

}
