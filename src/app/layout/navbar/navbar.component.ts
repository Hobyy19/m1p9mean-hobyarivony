import { Component, OnInit } from '@angular/core';
import { ToolsService } from 'src/app/service/tools.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  connected = false;

  constructor(private toolsService : ToolsService) { 
    if(this.toolsService.checkConnection()){
      this.connected = true;
    }
    
  }

  ngOnInit(): void {
  }

}
