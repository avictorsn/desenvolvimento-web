import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlternaComponentesService {

  pomodoroAtivo: boolean;
  flashCardAtivo: boolean;
  planejamentoAtivo: boolean;
  relatorioAtivo: boolean;
  agendaAtivo: boolean;
  noticiasAtivo: boolean;

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
