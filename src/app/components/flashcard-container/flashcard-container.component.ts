import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';

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

  flashcardIndex: number;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faTimesCircle = faTimesCircle;
  faCheckCircle = faCheckCircle;
  showAnswer = false;
  rightAnswer = false;
  scores = [];
  totalScore = 0;

  @Input() flashcardList: string;

  constructor(flashcardListService: FlashcardListService) {
    // this.flashcardList = flashcardListService.getList(this.group);
    this.flashcardIndex = 0;
  }

  ngOnInit() {
  }

  goToNext() {
    this.showAnswer = false;
    this.flashcardIndex++;
    const reachedIndexes = this.scores.map((element) => element.index );
    if (reachedIndexes.includes(this.flashcardIndex)) {
      this.rightAnswer = this.scores.find((element) => element.index === this.flashcardIndex).right;
    } else {
      this.rightAnswer = false;

    }
  }

  goToPrevious() {
    if (this.flashcardIndex > 0) {
      this.showAnswer = false;
      this.flashcardIndex--;
      const reachedIndexes = this.scores.map((element) => element.index );
      if (reachedIndexes.includes(this.flashcardIndex)) {
        this.rightAnswer = this.scores.find((element) => element.index === this.flashcardIndex).right;
      } else {
        this.rightAnswer = false;
      }
    }
  }

  revealAnswer() {
    this.showAnswer = true;
  }

  rightOrWrong() {
    this.rightAnswer = !this.rightAnswer;
    const score = this.scores.find((tuple) => tuple.index === this.flashcardIndex);
    if (!this.rightAnswer) {
      if (score) {
        score.right = false;
      } else  {
        this.scores.push({
          index: this.flashcardIndex,
          right: false
        });
      }
    } else if (this.rightAnswer) {
      if (score) {
        score.right = true;
      } else  {
        this.scores.push({
          index: this.flashcardIndex,
          right: true
        });
      }
    }
    this.updateTotalScore();
    console.log('Minha pilha: ' + this.scores.map((element) => element.right));


  }

  hasPrevious() {
    if (this.flashcardIndex === 0) {
      return false;
    }
    return true;
  }

  hasNext() {
    if (this.flashcardIndex === (this.flashcardList.length - 1)) {
      return false;
    }
    return true;
  }

  updateTotalScore() {
    const score = this.scores.filter((tuple) => tuple.right === true);
    this.totalScore = score.length;
  }

}
