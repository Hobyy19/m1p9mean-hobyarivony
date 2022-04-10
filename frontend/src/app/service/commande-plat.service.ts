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
export class CommandePlatService {

  baseUri: string = base_url+'commande_plat';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http : HttpClient) { }

  createCommandePlat(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    console.log(url);
    console.log(data);
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  getDetailsCommande(id_commande): Observable<any> {
    let url = `${this.baseUri}/`+id_commande;
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
