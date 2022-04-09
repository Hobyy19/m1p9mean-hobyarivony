import { Component, OnInit } from '@angular/core';
import { PlatService } from '../service/plat.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  restaurant = [];
  plats = [];
  msg ;
  constructor( private userService : UserService , private platService : PlatService) { }

  ngOnInit(): void {
    this.getTopResto();
    this.getTopPlat();
  }

  getTopResto(){
    return this.userService.getRestaurantTop5().subscribe(
      (res) => { 
        this.restaurant = res;
        console.log(res);

      },
      (err) => {
        this.msg = err;
      }
    );
  }

  getTopPlat(){
    return this.platService.getPlatTop().subscribe(
      (res) => { 
        this.plats = res;
        console.log(res);

      },
      (err) => {
        this.msg = err;
      }
    );
  }

  commander(plat){
    let qtt = 1;
    if(sessionStorage.getItem('commande') == null){
      let commande = [{plat: plat , qtt: qtt}];
      sessionStorage.setItem('commande', JSON.stringify(commande));
      console.log(JSON.parse(sessionStorage.getItem('commande')));
    } else  {
      let misy = false;
      let commande = JSON.parse(sessionStorage.getItem('commande'));
      
      for(let i = 0 ; i< commande.length; i++){   
        if (commande[i].plat._id == plat._id){
          commande[i].qtt = commande[i].qtt+1;
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
