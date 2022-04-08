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

  constructor(private platService : PlatService , private actRoute: ActivatedRoute,) { }

  ngOnInit(): void {
      let id = this.actRoute.snapshot.paramMap.get('id');
      this.getPlat(id);
      console.log(this.plat);
  }

  getPlat(id){
    this.platService.getPlat(id).subscribe((data) => {
      this.plat = data;
     })   
  }

}
