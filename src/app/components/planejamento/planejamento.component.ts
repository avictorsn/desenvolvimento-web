import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-planejamento',
  templateUrl: './planejamento.component.html',
  styleUrls: ['./planejamento.component.css']
})
export class PlanejamentoComponent implements OnInit {

  eventClicked = 'create';
  sidenavOpened: boolean;
  faBars = faBars;

  constructor() {
    this.sidenavOpened = false;
   }

  ngOnInit() {
  }

  toggle() {
    this.sidenavOpened = ! this.sidenavOpened;
  }

  create() {
    this.eventClicked = 'create';
  }

  load() {
    this.eventClicked = 'load';
  }

}
