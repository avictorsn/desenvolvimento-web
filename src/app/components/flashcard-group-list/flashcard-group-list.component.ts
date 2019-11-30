import { Component, OnInit, OnChanges } from '@angular/core';

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
export class FlashcardGroupListComponent implements OnInit, OnChanges {

  faTrashAlt = faTrashAlt;
  testRunning = false;
  flashcardGroupList: FlashcardGroup[];
  flashcardList: Flashcard[];
  groupListLoaded = false;
  flashcardListLoaded = false;

  //  Resolver problema de novo grupo sem lista de flashcards ficando ativo quando não deveria;
  constructor(private flashcardGroupService: SelectFlashcardGroupService, private flashcardService: FlashcardListService) { }

  ngOnChanges() {
    this.buildFlashcardGroupList();
  }

  ngOnInit() {
    this.buildFlashcardGroupList();
    this.populateFlashcardList();
  }

  buildFlashcardGroupList() {
    this.flashcardGroupService.getFlashcardGroupList().subscribe((data) => {
      this.flashcardGroupList = data;
      if (this.flashcardGroupList.length > 0) {
        this.flashcardGroupService.changeActiveFlashcardGroup(this.flashcardGroupList[0]._id);
      }
      this.groupListLoaded = true;
    });
  }

  populateFlashcardList() {
    this.flashcardService.getAll().subscribe((data) => {
      this.flashcardList = data;
      this.flashcardListLoaded = true;
    });
  }

  getActiveFlashcardGroup() {
    return this.flashcardGroupService.activeFlashcardGroup;
  }
  //  Resolver flashcard list que passa como parâmetro para o componente da lista;
  getActiveFlashcardList() {
    const activeFlashcardList = this.flashcardService.list(this.flashcardList, this.flashcardGroupService.activeFlashcardGroup);

    return activeFlashcardList;

  }


  isEmpty() {
    return this.flashcardGroupList.length === 0;
  }


  showMe(id) {
    this.flashcardGroupService.changeActiveFlashcardGroup(id);
    this.flashcardService.changeActiveFlashcardList(id);
  }

  updateLocalFlashcardGroupList(id) {
    const flashcardGroup = this.flashcardGroupList.find((element) => element._id === id);
    const index = this.flashcardGroupList.indexOf(flashcardGroup);
    this.flashcardGroupList.splice(index, 1);
    if (this.flashcardGroupList.length === 1) {
      this.flashcardGroupService.activeFlashcardGroup = this.flashcardGroupList[0]._id;
      this.flashcardService.changeActiveFlashcardList(this.flashcardGroupService.activeFlashcardGroup);
    }
  }

  sliceLocalFlashcardList(id) {
    const flashcard = this.flashcardList.find((element) => element._id === id);
    const index = this.flashcardList.indexOf(flashcard);
    this.flashcardList.splice(index, 1);
  }

  removeMe(id) {
    this.flashcardGroupService.removeGroup(id);
    this.updateLocalFlashcardGroupList(id);
  }

  run() {
    this.testRunning = true;
  }

  refreshFlashcardList(newFlashcard) {
    this.flashcardList.push(newFlashcard);
    this.populateFlashcardList();
  }

}
