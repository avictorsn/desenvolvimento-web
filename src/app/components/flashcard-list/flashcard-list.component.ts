import { Flashcard } from './../../models/flashcard.model';
import { FlashcardListService } from './../../services/flashcardList/flashcard-list.service';
import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
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
export class FlashcardListComponent implements OnInit, OnChanges {

  faTrashAlt = faTrashAlt;
  faSearch = faSearch;
  faEye = faEye;
  listWasLoaded = false;
  selectedFlashcardAnswer: string;

  @Input() flashcardList: Flashcard[];
  @Output() sliceMe =  new EventEmitter();

  constructor(private flashcardService: FlashcardListService) {
  }

  ngOnInit() {

  }

  ngOnChanges() {

  }


  selectFlashcard(flashcardAnswer) {
    this.selectedFlashcardAnswer = flashcardAnswer;
  }

  removeMe(id) {
    this.flashcardService.removeFlashcard(id);
    this.sliceMe.emit(id);
  }

  showMe(flashcard) {
    console.log(flashcard);

  }

  resetRemoveState() {
  }
}
