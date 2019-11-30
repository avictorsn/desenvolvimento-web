import { HttpClient } from '@angular/common/http';
import { FlashcardGroup } from './../../models/flashcardGroup.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SelectFlashcardGroupService {

  activeFlashcardGroup: string;
  // flashcardGroupList: FlashcardGroup[];
  urlFlashcardGroup = 'http://localhost:3000/api/flashcardgroups';

  constructor(private http: HttpClient) { }

  getFlashcardGroupList() {
    return this.http.get<FlashcardGroup[]>(this.urlFlashcardGroup).pipe(map(res => res));
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
}
