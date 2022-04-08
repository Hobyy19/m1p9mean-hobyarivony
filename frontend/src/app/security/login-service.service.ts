import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../entities/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private url = '/api/user/add'
  constructor(private http : HttpClient) { }

  add(user : any) :  Promise<User>{
    // return this.http.post(this.url, user)
    //   .toPromise()
    //   .then(response => response.json() as User)
    //   .catch(this.error);
    return null;  
  }

  // Error handling
  private error(error: any) {
    let message = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(message);
}
}
