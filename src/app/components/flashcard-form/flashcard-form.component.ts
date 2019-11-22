import { FlashcardListService } from './../../services/flashcardList/flashcard-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard-form',
  templateUrl: './flashcard-form.component.html',
  styleUrls: ['./flashcard-form.component.css']
})
export class FlashcardFormComponent implements OnInit {

  public question: string;
  public answer: string;

  constructor(private flashcardListService: FlashcardListService) { }

  ngOnInit() {
  }

  addFlashcard() {
    this.flashcardListService.addToList(this.question, this.answer);
  }

}
