import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToolsService } from 'src/app/service/tools.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  connected = false;
  profil ;

  constructor(private toolsService : ToolsService, private router : Router) { 
    if(this.toolsService.checkConnection()){
      this.connected = true;
      this.profil = sessionStorage.getItem('profil');
    }
    
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigateByUrl('');
  }

}
