import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard-form',
  templateUrl: './flashcard-form.component.html',
  styleUrls: ['./flashcard-form.component.css']
})
export class FlashcardFormComponent implements OnInit {

  public name: string;

  constructor() { }

  ngOnInit() {
  }

  goToList() {
    console.log(this.name);

  }

}
