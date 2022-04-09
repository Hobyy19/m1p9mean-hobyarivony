import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(private router : Router) { }

  checkConnection(): boolean{
    if (localStorage.getItem('id') !== null ) {
      return true;
    } else {
        return false;
    }
  }

  isConnected(){
    if ( !this.checkConnection()){
      this.router.navigateByUrl('/');
    }
  }
}
