import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component ({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {

  eventClicked = 'create';
  wasLoaded = false;
  sidenavOpened: boolean;
  faBars = faBars;

  constructor() {
    this.sidenavOpened = false;
   }

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

  toggle() {
    this.sidenavOpened = ! this.sidenavOpened;
  }

}
