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
export class UserService {

  baseUri: string = base_url+'user';
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private http : HttpClient) { }

  getRestaurantTop5(): Observable<any> {
    let url = `${this.baseUri}/restaurant/top/5`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
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
