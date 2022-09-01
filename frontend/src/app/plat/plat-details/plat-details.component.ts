import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatService } from 'src/app/service/plat.service';

@Component({
  selector: 'app-plat-details',
  templateUrl: './plat-details.component.html',
  styleUrls: ['./plat-details.component.css']
})
export class PlatDetailsComponent implements OnInit {

  plat : any;
  designation = "";

  counterVal = 0;


  constructor(private platService : PlatService , private actRoute: ActivatedRoute,) { }

  ngOnInit(): void {
      let id = this.actRoute.snapshot.paramMap.get('id');
      this.getPlat(id);
      console.log(id);
  }

  getPlat(id){
    this.platService.getPlat(id).subscribe((data) => {
      this.plat = data;
      this.designation = data['designation'];
     })   
  }

  
  incrementClick() {
    ++this.counterVal;
  }

  decrementCounter() {
    --this.counterVal;
  }

  commander(){
    let plat = this.plat;
    let qtt = this.counterVal;

    if(sessionStorage.getItem('commande') == null){
      let commande = [{plat: plat , qtt: qtt}];
      sessionStorage.setItem('commande', JSON.stringify(commande));
      console.log(JSON.parse(sessionStorage.getItem('commande')));
    } else  {
      let misy = false;
      let commande = JSON.parse(sessionStorage.getItem('commande'));
      
      for(let i = 0 ; i< commande.length; i++){   
        if (commande[i].plat._id == plat._id){
          commande[i].qtt = commande[i].qtt+qtt;
          misy = true;
        }
      }

      if(!misy){
        commande.push({plat: plat , qtt: qtt});
      }

      sessionStorage.setItem('commande', JSON.stringify(commande));
      console.log(JSON.parse(sessionStorage.getItem('commande')));
    }
  }

}
