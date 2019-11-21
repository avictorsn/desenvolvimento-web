import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flashcard-container',
  templateUrl: './flashcard-container.component.html',
  styleUrls: ['./flashcard-container.component.css']
})
export class FlashcardContainerComponent implements OnInit {

  @Input() loaded: string;

  constructor() { }

  ngOnInit() {
  }

}
