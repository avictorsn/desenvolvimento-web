import { Component, OnInit, Input } from '@angular/core';
import { Flashcard } from './../../models/flashcard.model';
import { faTrashAlt, faSearch, faEye } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-flashcard-list',
  templateUrl: './flashcard-list.component.html',
  styleUrls: ['./flashcard-list.component.css'],
  animations: [
    trigger('slideLeft', [
      transition('void => *', [animate('5000ms ease-in', style({opacity: 0}))]),
      transition('* => void', [animate('5000ms ease-out', style({opacity: 0, transform: 'translateX(-50%)'}))])
    ])
  ]
})
export class FlashcardListComponent implements OnInit {

  faTrashAlt = faTrashAlt;
  faSearch = faSearch;
  faEye = faEye;

  @Input() flashcardList: Flashcard[];

  constructor() {
  }

  ngOnInit() {

  }


  showMe(id) {
    const flashcard = this.flashcardList.find((element) => element.id === id);
    console.log(flashcard);

  }

  removeMe(id) {
    const flashcard = this.flashcardList.find((element) => element.id === id);
    const index = this.flashcardList.indexOf(flashcard);
    this.flashcardList.splice(index, 1);

  }


  resetRemoveState() {
  }
}
