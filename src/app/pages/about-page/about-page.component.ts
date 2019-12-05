import { Component, OnInit } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';
import { faStopwatch, faWindowRestore, faNewspaper } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
  animations: [
    trigger('fadeInHeader', [
      state('void', style({
        backgroundColor: 'white',
        opacity: 0.8,
        // transform: 'translateY(-1%)'
      })),
      state('*', style({
        backgroundColor: '#72E873',
        opacity: 1,
        transform: 'translateY(3%)'
      })),
      transition('void => *', [
        animate(800)
      ])
    ]),
    trigger('fadeInServices', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(5%)'
      })),
      state('*', style({
        opacity: 1,
        transform: 'translateY(10%)'
      })),
      transition('void => *', [
        animate('500ms 800ms')
      ])
    ])
  ]
})
export class AboutPageComponent implements OnInit {

  faStopwatch = faStopwatch;
  faWindowRestore = faWindowRestore;
  faNewspaper = faNewspaper;

  constructor() { }

  ngOnInit() {
  }


}
