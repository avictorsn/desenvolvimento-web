import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectFlashcardGroupService {

  activeFlashcardGroup: string;

  constructor() { }

  changeFlashcard(id) {
    this.activeFlashcardGroup = id;
  }
}
