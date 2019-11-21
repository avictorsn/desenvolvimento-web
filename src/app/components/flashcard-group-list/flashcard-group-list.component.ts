import { Flashcard } from './../../models/flashcard.model';
import { Component, OnInit } from '@angular/core';
import { SelectFlashcardGroupService } from '../../services/selectFlashcardGroup/select-flashcard-group.service';
import { FlashcardGroup } from '../../models/flashcardGroup.model';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-flashcard-group-list',
  templateUrl: './flashcard-group-list.component.html',
  styleUrls: ['./flashcard-group-list.component.css']
})
export class FlashcardGroupListComponent implements OnInit {

  faTrashAlt = faTrashAlt;

  flashcardGroupList: FlashcardGroup[];

  //  Remover isto e fazer a lista de flashcards computar a lista a partir das services;
  activeFlashcardList: Flashcard[];

  constructor(private selectionService: SelectFlashcardGroupService) { }

  ngOnInit() {
    this.flashcardGroupList = [{id: '1', groupname: 'Grupo1'}, {id: '2', groupname: 'Grupo2'}, {id: '3', groupname: 'Grupo3'}];
    this.activeFlashcardList = [
      {id: '1', group: 'grupo', question: 'Questão 1', answer: 'Não sei'},
      {id: '2', group: 'grupo', question: 'Questão 2', answer: 'Não sei'},
      {id: '3', group: 'grupo', question: 'Questão 3', answer: 'Não sei'}];
    this.selectionService.activeFlashcardGroup = this.flashcardGroupList[0].id;
    console.log(this.flashcardGroupList[0].id);

  }

  getActiveFlashcard() {
    return this.selectionService.activeFlashcardGroup;
  }

  showMe(id) {
    this.selectionService.changeFlashcard(id);
    console.log(this.selectionService.activeFlashcardGroup);
  }

  removeMe(id) {
    const flashcardGroup = this.flashcardGroupList.find((element) => element.id === id);
    const index = this.flashcardGroupList.indexOf(flashcardGroup);
    this.flashcardGroupList.splice(index, 1);
    this.selectionService.activeFlashcardGroup = this.flashcardGroupList[0].id;
  }

}
