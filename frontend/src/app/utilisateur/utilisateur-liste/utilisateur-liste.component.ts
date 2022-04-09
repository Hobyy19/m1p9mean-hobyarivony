import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-utilisateur-liste',
  templateUrl: './utilisateur-liste.component.html',
  styleUrls: ['./utilisateur-liste.component.css']
})
export class UtilisateurListeComponent implements OnInit {

  users = [];
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
     })   
  }

}
