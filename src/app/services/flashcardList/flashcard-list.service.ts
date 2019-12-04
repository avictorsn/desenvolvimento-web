import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Flashcard } from './../../models/flashcard.model';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlashcardListService {

  //  Interpretar qual a lista correta a partir do grupo ativo;
  activeFlashcardList: string;
  urlFlashcard = 'http://localhost:3000/api/flashcards';
  updatedList: Flashcard[];

    constructor(private http: HttpClient) {
     }

  changeActiveFlashcardList(id) {
    this.activeFlashcardList = id;
  }

  removeFlashcard(id) {
    this.http.delete(this.urlFlashcard + '/' + id).toPromise().then(() => {
      console.log('Flashcard removido com sucesso!');
    })
    .catch((err) => {
      console.log(err);
    });
  }

  addToList(group, question, answer) {
    const flashcard: Flashcard = {group, question, answer};
    this.http.post(this.urlFlashcard, flashcard).toPromise().then((res) => {
      console.log('Flashcard adicionado com sucesso!');
    })
    .catch((err) => {
      console.log(err);
    });
    return flashcard;
  }



  getList(group) {
    let list = [];
    this.http.get<Flashcard[]>(this.urlFlashcard + '?grupo="' + group + '"').pipe(map(res => res)).subscribe((data) => {
      list = data;
    });
    return list;
  }


  getAll() {
    return this.http.get<Flashcard[]>(this.urlFlashcard).pipe(
      map(res => res),
      catchError(this.handleError)
    );
  }

  updateList(flashcardList, group) {
    let results = [];
    results = flashcardList.filter((flashcard) => (flashcard.group === group));
    this.updatedList = results;
    // return results;
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
