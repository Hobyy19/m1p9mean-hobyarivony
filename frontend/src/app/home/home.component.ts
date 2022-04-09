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

}
