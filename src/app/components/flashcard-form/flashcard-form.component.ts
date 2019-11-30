import { SelectFlashcardGroupService } from './../../services/selectFlashcardGroup/select-flashcard-group.service';
import { FlashcardListService } from './../../services/flashcardList/flashcard-list.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-flashcard-form',
  templateUrl: './flashcard-form.component.html',
  styleUrls: ['./flashcard-form.component.css']
})
export class FlashcardFormComponent implements OnInit {

  public question: string;
  public answer: string;
  @Output() pushMe = new EventEmitter();

  constructor(private flashcardListService: FlashcardListService, private flashcardGroupService: SelectFlashcardGroupService) { }

  ngOnInit() {
  }

  addFlashcard() {
    const group = this.flashcardGroupService.activeFlashcardGroup;
    this.flashcardListService.addToList(group, this.question, this.answer);
    this.pushMe.emit({group, question: this.question, answer: this.answer});
  }

}
