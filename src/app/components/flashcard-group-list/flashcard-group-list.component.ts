import { Component, OnInit } from '@angular/core';

import { Flashcard } from './../../models/flashcard.model';
import { FlashcardGroup } from '../../models/flashcardGroup.model';

import { FlashcardListService } from './../../services/flashcardList/flashcard-list.service';
import { SelectFlashcardGroupService } from '../../services/selectFlashcardGroup/select-flashcard-group.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-flashcard-group-list',
  templateUrl: './flashcard-group-list.component.html',
  styleUrls: ['./flashcard-group-list.component.css']
})
export class FlashcardGroupListComponent implements OnInit {

  faTrashAlt = faTrashAlt;

  flashcardGroupList: FlashcardGroup[];

  //  Resolver problema de novo grupo sem lista de flashcards ficando ativo quando não deveria;
  constructor(private selectionService: SelectFlashcardGroupService, private flashcardService: FlashcardListService) { }

  ngOnInit() {
    this.flashcardGroupList = this.selectionService.flashcardGroupList;
    if (this.flashcardGroupList.length > 0) {
      this.selectionService.activeFlashcardGroup = this.flashcardGroupList[0].id;
    }
  }

  getActiveFlashcardGroup() {
    return this.selectionService.activeFlashcardGroup;
  }

  getActiveFlashcardList() {
    return this.flashcardService.activeFlashcardList;
  }

  isEmpty() {
    return this.selectionService.flashcardGroupList.length === 0;
  }


  showMe(id) {
    this.selectionService.changeFlashcard(id);
    this.flashcardService.changeActiveFlashcardList(id);
  }

  removeMe(id) {
    const flashcardGroup = this.flashcardGroupList.find((element) => element.id === id);
    const index = this.flashcardGroupList.indexOf(flashcardGroup);
    this.flashcardGroupList.splice(index, 1);
    if (this.flashcardGroupList.length > 1) {
      this.selectionService.activeFlashcardGroup = this.flashcardGroupList[0].id;
      this.flashcardService.changeActiveFlashcardList(this.selectionService.activeFlashcardGroup);
    }
  }

}
