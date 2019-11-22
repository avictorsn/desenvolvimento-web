import { FlashcardGroup } from './../../models/flashcardGroup.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectFlashcardGroupService {

  activeFlashcardGroup: string;
  flashcardGroupList: FlashcardGroup[] = [{id: '1', groupname: 'Grupo1'}, {id: '2', groupname: 'Grupo2'}, {id: '3', groupname: 'Grupo3'}];
  constructor() { }


  changeFlashcard(id) {
    this.activeFlashcardGroup = id;
  }

  removeGroup(id) {

  }

  addGroup(name) {
    const flashcardGroup: FlashcardGroup = {id: (this.flashcardGroupList.length + 1).toString(), groupname: name };
    this.flashcardGroupList.push(flashcardGroup);
  }
}
