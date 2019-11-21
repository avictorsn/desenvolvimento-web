import { Flashcard } from './../../models/flashcard.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlashcardListService {

  //  Interpretar qual a lista correta a partir do grupo ativo;
  activeFlashcardList: Flashcard[] = [
    {id: '1', group: 'grupo', question: 'Questão 1', answer: 'Não sei'},
    {id: '2', group: 'grupo', question: 'Questão 2', answer: 'Não sei'},
    {id: '3', group: 'grupo', question: 'Questão 3', answer: 'Não sei'}];

  constructor() { }

  changeActiveFlashcardList() {

  }
}
