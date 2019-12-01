import { SelectFlashcardGroupService } from './../../services/selectFlashcardGroup/select-flashcard-group.service';
import { FlashcardListService } from './../../services/flashcardList/flashcard-list.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-flashcard-form',
  templateUrl: './flashcard-form.component.html',
  styleUrls: ['./flashcard-form.component.css']
})
export class FlashcardFormComponent implements OnInit {

  public question: string;
  public answer: string;
  @Output() pushMe = new EventEmitter();

  constructor(
    private flashcardListService: FlashcardListService,
    private flashcardGroupService: SelectFlashcardGroupService,
    private flashcardSnackBar: MatSnackBar
    ) { }

  ngOnInit() {
  }

  addFlashcard() {
    const group = this.flashcardGroupService.activeFlashcardGroup;
    this.flashcardListService.addToList(group, this.question, this.answer);
    this.pushMe.emit({group, question: this.question, answer: this.answer});
    this.flashcardSnackBar.open('Flashcard adicionado com sucesso!', 'Fechar', {
      duration: 2000
    });
  }

}
