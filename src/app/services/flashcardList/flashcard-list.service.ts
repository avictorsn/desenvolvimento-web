import { Flashcard } from './../../models/flashcard.model';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class FlashcardListService {

  //  Interpretar qual a lista correta a partir do grupo ativo;
  activeFlashcardList: Flashcard[];

  flashcardList1: Flashcard[] = [
    {id: '1', group: 'grupo', question: 'Questão 1', answer: 'Não sei'},
    {id: '2', group: 'grupo', question: 'Questão 2', answer: 'Não sei'},
    {id: '3', group: 'grupo', question: 'Questão 3', answer: 'Não sei'}
  ];

  flashcardList2: Flashcard[] = [
    {id: '1', group: 'grupo', question: 'Questão 4', answer: 'Não sei'},
    {id: '2', group: 'grupo', question: 'Questão 5', answer: 'Não sei'},
    {id: '3', group: 'grupo', question: 'Questão 6', answer: 'Não sei'}
  ];

  flashcardList3: Flashcard[] = [
    {id: '1', group: 'grupo', question: 'Questão 7', answer: 'Não sei'},
    {id: '2', group: 'grupo', question: 'Questão 8', answer: 'Não sei'},
    {id: '3', group: 'grupo', question: 'Questão 9', answer: 'Não sei'}];

    flashcardGroups = [this.flashcardList1, this.flashcardList2, this.flashcardList3];

    constructor() {
      this.activeFlashcardList = this.flashcardGroups[0];
     }

  changeActiveFlashcardList(id) {
    this.activeFlashcardList = this.flashcardGroups[parseInt(id, 10) - 1];
  }

  removeList(id) {
    this.flashcardGroups.splice((parseInt(id, 10) - 1), 1);
  }

  addToList(question, answer) {
    const flashcard: Flashcard = {id: (this.activeFlashcardList.length + 1).toString(), group: 'grupo', question, answer};
    this.activeFlashcardList.push(flashcard);
  }

}
