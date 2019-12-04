import { News } from './../../models/news.model';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleNewsApiService {

  apiKey = 'ad5f8ef06b204bf19bc5173e9f85dff2';
  urlBase = 'http://newsapi.org/v2/top-headlines?country=br';
  categoryQuery = 'category=science';
  keyQuery = '&apiKey=' + this.apiKey;
  pageSize = 'pageSize=10';

  constructor(private http: HttpClient) { }

  getGeneralNews() {
    return this.http.get<News>(this.urlBase + '&' + this.categoryQuery + this.keyQuery).pipe(
      map(res => res),
      catchError(this.handleError)
    );
  }

  getNewsByTag(tag) {
    const queryTag = 'q="' + tag + '"';
    return this.http.get(this.urlBase + '&' + queryTag + '&' + this.pageSize + this.keyQuery).pipe(
      map(res => res),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
