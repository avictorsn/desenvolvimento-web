import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlternaComponentesService {

  pomodoroAtivo: Boolean;
  flashCardAtivo: Boolean;
  planejamentoAtivo: Boolean;
  relatorioAtivo: Boolean;
  agendaAtivo: Boolean;
  noticiasAtivo: Boolean;

  constructor() { }

  desativaComponentes() {
    this.pomodoroAtivo = false;
    this.flashCardAtivo = false;
    this.planejamentoAtivo = false;
    this.relatorioAtivo = false;
    this.agendaAtivo = false;
    this.noticiasAtivo = false;
  }
}
