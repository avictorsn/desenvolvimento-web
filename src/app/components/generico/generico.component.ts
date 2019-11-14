import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generico',
  templateUrl: './generico.component.html',
  styleUrls: ['./generico.component.css']
})
export class GenericoComponent implements OnInit {

  list = ['Teste1', 'Teste2'];

  constructor() { }

  ngOnInit() {
  }

}
