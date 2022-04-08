import { Component, OnInit } from '@angular/core';
import { PlatService } from 'src/app/service/plat.service';
import { ToolsService } from 'src/app/service/tools.service';

@Component({
  selector: 'app-plat-liste',
  templateUrl: './plat-liste.component.html',
  styleUrls: ['./plat-liste.component.css']
})
export class PlatListeComponent implements OnInit {

  Plat:any = [];

  constructor(private platService : PlatService, private toolsService : ToolsService) { 
    // this.toolsService.isConnected();
    this.readPlat();
  }

  ngOnInit(): void {
  }

  readPlat(){
    this.platService.getPlats().subscribe((data) => {
      this.Plat = data;
     })   
  }

  // removePlat(plat, index) {
  //   if(window.confirm('Are you sure?')) {
  //       this.platService.deletePlat(plat._id).subscribe((data) => {
  //         this.Plat.splice(index, 1);
  //       }
  //     )    
  //   }
  // }

  commander(plat){
    this.platService.commande.push(plat);
  }

}
