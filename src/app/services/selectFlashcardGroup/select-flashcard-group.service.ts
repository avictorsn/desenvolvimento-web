import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FlashcardGroup } from './../../models/flashcardGroup.model';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectFlashcardGroupService {

  activeFlashcardGroup: string;
  // flashcardGroupList: FlashcardGroup[];
  urlFlashcardGroup = 'http://localhost:3000/api/flashcardgroups';

  constructor(private http: HttpClient) { }

  getFlashcardGroupList() {
    return this.http.get<FlashcardGroup[]>(this.urlFlashcardGroup).pipe(
      map(res => res),
      catchError(this.handleError)
    );
  }

  changeActiveFlashcardGroup(id) {
    this.activeFlashcardGroup = id;
  }

  removeGroup(id) {
    this.http.delete(this.urlFlashcardGroup + '/' + id).toPromise().then(() => {
      console.log('Grupo removido com sucesso!');
    })
    .catch((err) => {
      console.log(err);
    });
  }

  addGroup(groupname) {
    const flashcardGroup: FlashcardGroup = { groupname };
    this.http.post(this.urlFlashcardGroup, flashcardGroup).toPromise().then(() => {
      console.log('Grupo adicionado com sucesso!');
    })
    .catch((err) => {
      console.log(err);
    });
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
  }
}
