import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {

  eventClicked = 'create';
  wasLoaded = false;

  constructor() { }

  ngOnInit() {
  }

  create() {
    this.eventClicked = 'create';
    this.wasLoaded = false;
  }

  load() {
    this.eventClicked = 'load';
    this.wasLoaded = false;
  }

  loaded() {
    this.eventClicked = 'nothing';
    this.wasLoaded = true;
  }

}
