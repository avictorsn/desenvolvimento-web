import { SelectFlashcardGroupService } from './../../services/selectFlashcardGroup/select-flashcard-group.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard-group-form',
  templateUrl: './flashcard-group-form.component.html',
  styleUrls: ['./flashcard-group-form.component.css']
})
export class FlashcardGroupFormComponent implements OnInit {

  public name: string;
  wasAdded: boolean;

  constructor(private flashcardGroupService: SelectFlashcardGroupService) { }

  ngOnInit() {
    this.wasAdded = false;
  }

  createGroup() {
    this.flashcardGroupService.addGroup(this.name);
    this.wasAdded = true;
  }

}
