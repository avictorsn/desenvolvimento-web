import { Component, OnInit, Input } from '@angular/core';
import { AlternaComponentesService } from 'src/app/services/alternaComponetes/alterna-componentes.service';

@Component({
  selector: 'app-generico',
  templateUrl: './generico.component.html',
  styleUrls: ['./generico.component.css']
})
export class GenericoComponent implements OnInit {

  constructor( private service: AlternaComponentesService ) { 
  }

  ngOnInit() {
  }

}
