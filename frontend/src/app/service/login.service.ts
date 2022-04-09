import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

import { base_url } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUri: string = base_url+'user';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor( private http : HttpClient) { }


  
  createUser(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  setUser (data : any) {
    localStorage.setItem('id',data._id); 
    sessionStorage.setItem('email', data.email);
    sessionStorage.setItem('nom', data.nom);
    sessionStorage.setItem('profil' , data.profil);
  }

  login(data): Observable<any> {
    let url = `${this.baseUri}/login`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
