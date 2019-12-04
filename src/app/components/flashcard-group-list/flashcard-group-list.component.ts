import { Component, OnInit, OnChanges } from '@angular/core';

import { Flashcard } from './../../models/flashcard.model';
import { FlashcardGroup } from '../../models/flashcardGroup.model';

import { FlashcardListService } from './../../services/flashcardList/flashcard-list.service';
import { SelectFlashcardGroupService } from '../../services/selectFlashcardGroup/select-flashcard-group.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { MatSnackBar } from '@angular/material/snack-bar';


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
  flashcardListEmpty = false;

  constructor(
    private flashcardGroupService: SelectFlashcardGroupService,
    public flashcardService: FlashcardListService,

    private flashcardGroupSnackBar: MatSnackBar) { }
  ngOnChanges() {
    this.buildFlashcardGroupList();
    this.buildFlashcardGroupList();
    this.populateFlashcardList();
  }

  ngOnInit() {
    this.buildFlashcardGroupList();
    this.populateFlashcardList();
    // this.buildFlashcardGroupList();
  }

  buildFlashcardGroupList() {
    this.flashcardGroupService.getFlashcardGroupList().subscribe((data) => {
      this.flashcardGroupList = data;
      if (this.flashcardGroupList.length > 0) {
        this.flashcardGroupService.changeActiveFlashcardGroup(this.flashcardGroupList[0]._id);
      }
      this.groupListLoaded = true;
    },
    error => this.showError()
    );
  }

  populateFlashcardList() {
    this.flashcardService.getAll().subscribe((data) => {
      this.flashcardList = data;
      this.flashcardListLoaded = true;
      this.flashcardService.updateList(this.flashcardList, this.flashcardGroupService.activeFlashcardGroup);
      if (this.flashcardService.updatedList.length === 0) {
        this.flashcardListEmpty = true;
      } else {
        this.flashcardListEmpty = false;
      }
      console.log('atualizou');
    }
    );

  }

  getActiveFlashcardGroup() {
    return this.flashcardGroupService.activeFlashcardGroup;
  }
  //  Resolver flashcard list que passa como parâmetro para o componente da lista;
  // getActiveFlashcardList() {

  //   return activeFlashcardList;

  // }


  isEmpty() {
    return this.flashcardGroupList.length === 0;
  }


  showMe(id) {
    this.flashcardGroupService.changeActiveFlashcardGroup(id);
    this.flashcardService.changeActiveFlashcardList(id);
    this.populateFlashcardList();
  }

  updateLocalFlashcardGroupList(id) {
    const flashcardGroup = this.flashcardGroupList.find((element) => element._id === id);
    const index = this.flashcardGroupList.indexOf(flashcardGroup);
    this.flashcardGroupList.splice(index, 1);
    if (this.flashcardGroupList.length === 1) {
      this.flashcardGroupService.activeFlashcardGroup = this.flashcardGroupList[0]._id;
      this.flashcardService.changeActiveFlashcardList(this.flashcardGroupService.activeFlashcardGroup);
    }
    // this.populateFlashcardList();
  }

  sliceLocalFlashcardList(id) {
    this.populateFlashcardList();
    const flashcard = this.flashcardList.find((element) => element._id === id);
    const index = this.flashcardList.indexOf(flashcard);
    this.flashcardList.splice(index, 1);
    this.populateFlashcardList();
  }

  removeMe(id) {
    this.flashcardGroupService.removeGroup(id);
    this.updateLocalFlashcardGroupList(id);
    this.flashcardGroupSnackBar.open('Grupo removido com sucesso!', 'Fechar', {
      duration: 2000
    });
    this.populateFlashcardList();
  }

  run() {
    this.testRunning = true;
  }

  refreshFlashcardList(newFlashcard) {
    this.populateFlashcardList();
    this.flashcardList.push(newFlashcard);
    this.populateFlashcardList();
  }

  showError() {
    this.flashcardGroupSnackBar.open('Falha na conexão! Tente novamente.', 'Fechar').afterDismissed().subscribe(() => {
      this.buildFlashcardGroupList();
      this.populateFlashcardList();
    });
  }

}
