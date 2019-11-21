import { FlashcardListService } from './../../services/flashcardList/flashcard-list.service';
import { Component, OnInit, Input } from '@angular/core';
import { Flashcard } from './../../models/flashcard.model';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-flashcard-list',
  templateUrl: './flashcard-list.component.html',
  styleUrls: ['./flashcard-list.component.css']
})
export class FlashcardListComponent implements OnInit {

  faTrashAlt = faTrashAlt;

  @Input() flashcardList: Flashcard[];

  //  Fazer ele consumir a lista de flashcards pela service;
  constructor(flashcardListService: FlashcardListService) { }

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

}
