import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  footer: String = 'Olá';

  constructor() { }

  ngOnInit() {
  }

  helloWorld(){
    console.log('Hello World');
    
  }

}
