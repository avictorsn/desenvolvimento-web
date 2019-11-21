import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard-group-form',
  templateUrl: './flashcard-group-form.component.html',
  styleUrls: ['./flashcard-group-form.component.css']
})
export class FlashcardGroupFormComponent implements OnInit {

  public name: string;

  constructor() { }

  ngOnInit() {
  }

  goToList() {
    console.log(this.name);

  }

}
