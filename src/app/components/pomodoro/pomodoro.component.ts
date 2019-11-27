import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css']
})



export class PomodoroComponent implements OnInit {

  isClockRunning: boolean = false;
  clockWasPaused: boolean = false;
  showConfig: boolean = true;
  workSessionDuration: number = 60; // em segundos 25min
  currentTimeLeftInSession: number = this.workSessionDuration;
  breakSessionDuration: number = 300;
  timeSpentInCurrentSession: number = 0;
  typeSession: string = "Work";
  clockTimer: any;

  pomodoroTimer: HTMLElement;
  startButton: HTMLElement;
  pauseButton: HTMLElement;
  stopButton: HTMLElement;
  configButton: HTMLElement;

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

    // pq a div não ta carregando???
    this.pomodoroTimer = document.querySelector('#pomodoro-timer');
    this.startButton = document.querySelector('#pomodoro-start');
    this.pauseButton = document.querySelector('#pomodoro-pause');
    this.stopButton = document.querySelector('#pomodoro-stop');
    this.configButton = document.querySelector('#showConfig');

    this.configButton.addEventListener('click', () => {
      
      this.showConfig = !this.showConfig;

      (<HTMLInputElement>document.querySelector('#input-work-duration')).hidden = this.showConfig;
      (<HTMLInputElement>document.querySelector('#input-break-duration')).hidden = this.showConfig;
    });

    this.startButton.addEventListener('click', () => {
      this.pauseButton.hidden = false;
      this.startButton.hidden = true;
      this.stopButton.hidden = false;
      (<HTMLInputElement>document.getElementById("pomodoro-clock-task")).disabled = true;
      this.toggleClock(false);
    });

    this.pauseButton.addEventListener('click', () => {
      this.pauseButton.hidden = true;
      this.startButton.hidden = false;
      this.toggleClock(false);
    });

    this.stopButton.addEventListener('click', () => {
      this.pauseButton.hidden = true;
      this.startButton.hidden = false;
      this.stopButton.hidden = true;
      (<HTMLInputElement>document.getElementById("pomodoro-clock-task")).disabled = false;
      this.toggleClock(true);
    });



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

  toggleClock(reset: boolean) {

    //var clockTimer: any;

    if (reset) {
      //para relogio
      this.stopClock();
    } else {
      if (this.isClockRunning) {
        //pausa
        clearInterval(this.clockTimer);
        this.isClockRunning = false;
        this.clockWasPaused = true;
      } else {
        //inicia
        this.isClockRunning = true;


        //Pega input, se não tiver, vai o básico, e se não estava pausado
        if (!this.clockWasPaused) {
          this.clockWasPaused = false;
          this.ajustaTempo();
        }

        this.clockTimer = setInterval(() => {
          // decrease time left / increase time spent
          //this.currentTimeLeftInSession = this.currentTimeLeftInSession - 1;
          this.stepDown();
          this.displayCurrentTimeLeftInSession();
        }, 1000);
      }
    }
  }

  ajustaTempo() {
    let workDurationInput = (<HTMLInputElement>document.querySelector('#input-work-duration')).value;
    let breakDurationInput = (<HTMLInputElement>document.querySelector('#input-break-duration')).value;
    this.workSessionDuration = workDurationInput ? parseInt(workDurationInput) * 60 : 25 * 60;
    this.currentTimeLeftInSession = this.workSessionDuration;
    this.breakSessionDuration = breakDurationInput ? parseInt(breakDurationInput) * 60 : 5 * 60;
  }

  stepDown() {
    if (this.currentTimeLeftInSession > 0) {
      // decrease time left / increase time spent
      this.currentTimeLeftInSession = this.currentTimeLeftInSession - 1;
      this.timeSpentInCurrentSession = this.timeSpentInCurrentSession + 1;
    } else if (this.currentTimeLeftInSession === 0) {
      this.timeSpentInCurrentSession = 0;
      // Timer is over -> if work switch to break, viceversa
      if (this.typeSession === 'Break') {
        this.currentTimeLeftInSession = this.workSessionDuration;
        this.displaySessionLog('Break');
        this.typeSession = 'Work';
        //(<HTMLInputElement>document.getElementById("pomodoro-clock-task")).disabled = false;

      } else {
        this.currentTimeLeftInSession = this.breakSessionDuration;
        this.displaySessionLog('Work');
        this.typeSession = 'Break';
        //(<HTMLInputElement>document.getElementById("pomodoro-clock-task")).disabled = true;

      }

    }
    this.displayCurrentTimeLeftInSession();
  }

  displaySessionLog(type: string) {

    let currentTaskLabel = (<HTMLInputElement>document.querySelector('#pomodoro-clock-task')).value;

    const sessionsList = document.querySelector('#pomodoro-sessions');
    // append li to it
    const li = document.createElement('li');
    let sessionLabel = currentTaskLabel ? currentTaskLabel : 'Work'

    if (this.typeSession === 'Break') {
      sessionLabel = 'Break'
    }

    let elapsedTime = Math.floor(this.timeSpentInCurrentSession / 60)
    //elapsedTime = elapsedTime > 0 ? elapsedTime : '< 1';

    const text = document.createTextNode(
      `${sessionLabel} : ${elapsedTime} min`
    )

    li.appendChild(text);
    sessionsList.appendChild(li);
  }


  stopClock() {

    this.displaySessionLog(this.typeSession);
    this.typeSession = "Work";
    this.clockWasPaused = false;

    //this.ajustaTempo();
    this.timeSpentInCurrentSession = 0;
    // 1) reset the timer we set
    clearInterval(this.clockTimer);
    // 2) update our variable to know that the timer is stopped
    this.isClockRunning = false;
    // reset the time left in the session to its original state
    this.currentTimeLeftInSession = this.workSessionDuration;
    // update the timer displayed
    this.displayCurrentTimeLeftInSession();

  }

  displayCurrentTimeLeftInSession() {

    const secondsLeft = this.currentTimeLeftInSession;
    let result = '';
    const seconds = secondsLeft % 60;
    const minutes = Math.floor(secondsLeft / 60) % 60;
    let hours = Math.floor(secondsLeft / 3600);

    // add leading zeroes if it's less than 10
    function addLeadingZeroes(time) {
      return time < 10 ? `0${time}` : time;
    }

    if (hours > 0) result += `${hours}:`;

    result += `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`;
    this.pomodoroTimer.innerHTML = result.toString();

  }


}
