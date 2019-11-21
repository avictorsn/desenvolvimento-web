import { Component, OnInit } from '@angular/core';
import { AlternaComponentesService } from 'src/app/services/alternaComponetes/alterna-componentes.service';

@Component({
  selector: 'app-vertical-navbar',
  templateUrl: './vertical-navbar.component.html',
  styleUrls: ['./vertical-navbar.component.css']
})
export class VerticalNavbarComponent implements OnInit {

  constructor( private service: AlternaComponentesService) { }

  ngOnInit() {
    this.service.pomodoroAtivo = true;
  }

  componentePomodoro() {
    this.desativaComponentes();
    this.service.pomodoroAtivo = true;
  }

  componenteFlashCard() {
    this.desativaComponentes();
    this.service.flashCardAtivo = true;
  }

  componentePlanejamento() {
    this.desativaComponentes();
    this.service.planejamentoAtivo = true;

  }

  componenteRelatorio() {
    this.desativaComponentes();
    this.service.relatorioAtivo = true;

  }

  componenteAgenda() {
    this.desativaComponentes();
    this.service.agendaAtivo = true;

  }

  componenteNoticias() {
    this.desativaComponentes();
    this.service.noticiasAtivo = true;

  }

  desativaComponentes() {
    this.service.desativaComponentes();
  }

}
