import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { FlashcardListService } from './../../services/flashcardList/flashcard-list.service';

@Component({
  selector: 'app-flashcard-container',
  templateUrl: './flashcard-container.component.html',
  styleUrls: ['./flashcard-container.component.css'],
  animations: [
    trigger('answerBackgroundColor', [
      state('true', style({
        filter: 'blur(0px)'
      })),
      state('false', style({
        filter: 'blur(8px)'
      })),
      transition('false=>true', animate('700ms ease-in-out')),
      transition('true=>false', animate('8ms ease-in-out'))
    ]),
    trigger('answerButtonColor', [
      state('true', style({
        color: '#63cc65'
      })),
      state('false', style({
        color: 'black'
      })),
      transition('false=>true', animate('200ms ease-in-out')),
      transition('true=>false', animate('200ms ease-in-out'))
    ])
  ]
})
export class FlashcardContainerComponent implements OnInit {

  flashcardList = [];
  flashcardIndex: number;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faTimesCircle = faTimesCircle;
  faCheckCircle = faCheckCircle;
  showAnswer = false;
  rightAnswer = false;

  constructor(flashcardListService: FlashcardListService) {
    this.flashcardList = flashcardListService.activeFlashcardList;
    this.flashcardIndex = 0;
  }

  ngOnInit() {
  }

  goToNext() {
    this.rightAnswer = false;
    this.showAnswer = false;
    this.flashcardIndex++;
  }

  goToPrevious() {
    if (this.flashcardIndex > 0) {
      this.rightAnswer = false;
      this.showAnswer = false;
      this.flashcardIndex--;
    }
  }

  revealAnswer() {
    this.showAnswer = true;
  }

  rightOrWrong() {
    this.rightAnswer = !this.rightAnswer;

  }
}
