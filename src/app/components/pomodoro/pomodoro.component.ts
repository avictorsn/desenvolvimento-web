import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // Adicionamos uma classe `checked`, sempre que um elemento da lista for clicado
    var listaMetas = <HTMLDivElement>document.getElementById("listaMetasDoDia");

    listaMetas.addEventListener("click", (ev: MouseEvent) => {
      var element = ev.target as HTMLElement;
      if (element.tagName === "LI") {
        element.classList.toggle('checked');
      }
    }, false);
  }


  /**
   * Limitação: angular não consegue pegar css, qndo elemento é adicionado
   * dinamicamente
   */
  addElementoListaMeta() {

    /**
     * Criamos um elemento para a lista, adicionamos as classes necessárias
     */
    

    var li = document.createElement("li");
    // Angular tem algumas complicações, como pegar valor do input
    var valorInput = (<HTMLInputElement>document.getElementById("inputMetasDoDia")).value;
    var textoInput = document.createTextNode(valorInput);
    li.appendChild(textoInput);
    li.classList.add("list-group-item");
    li.classList.add("py-0");

    (<HTMLInputElement>document.getElementById("btnAddElementoLista")).value = "";

    /**
     * Adicionamos botão 'span' para apagar elemento da lista de metas
     */
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.classList.add("close");
    span.onclick = function () {
      var liClosest = span.closest('li');
      var ulClosest = liClosest.closest('ul');
      ulClosest.removeChild(liClosest);
    }

    span.appendChild(txt);
    li.appendChild(span);

    if (!(valorInput === '')) {
      document.getElementById("listaMetasDoDia").appendChild(li);
    }

  }

}
