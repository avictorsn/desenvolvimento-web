import { Component, OnInit } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { faStopCircle } from '@fortawesome/free-solid-svg-icons'
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import { FaConfig } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css']
})



export class PomodoroComponent implements OnInit {

  isClockRunning: boolean = false;
  clockWasPaused: boolean = false;
  showConfig: boolean = true;
  workSessionDuration: number = 60 * 25; // em segundos 25min
  currentTimeLeftInSession: number = this.workSessionDuration;
  clockLate: number = (this.workSessionDuration / 60) * 9;
  breakSessionDuration: number = 300;
  timeSpentInCurrentSession: number = 0;
  typeSession: string = "Work";
  clockTimer: any;

  pomodoroTimer: HTMLElement;
  startButton: HTMLElement;
  pauseButton: HTMLElement;
  stopButton: HTMLElement;
  configButton: HTMLElement;
  faCog = faCog;
  faPlayCircle = faPlayCircle;
  faStopCircle = faStopCircle;
  faPauseCircle = faPauseCircle;

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

      if (this.showConfig) {
        (<HTMLDivElement>document.querySelector('.inputParaPomodoro')).setAttribute("style", "visibility: visible; opacity: 1; transition-delay: 0s;");
        this.showConfig = false;
      } else {
        this.showConfig = true;
        (<HTMLDivElement>document.querySelector('.inputParaPomodoro')).setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s linear 0.33s, opacity 0.33s linear;");
      }


    });

    this.startButton.addEventListener('click', () => {
      this.pauseButton.hidden = false;
      this.startButton.hidden = true;
      this.stopButton.hidden = false;
      (<HTMLDivElement>document.getElementById("circuloPomodoro")).style.animationPlayState = "running";
      (<HTMLInputElement>document.getElementById("pomodoro-clock-task")).disabled = true;
      this.toggleClock(false);
    });

    this.pauseButton.addEventListener('click', () => {
      this.pauseButton.hidden = true;
      this.startButton.hidden = false;
      (<HTMLDivElement>document.getElementById("circuloPomodoro")).style.animationPlayState = "paused";
      this.toggleClock(false);
    });

    this.stopButton.addEventListener('click', () => {
      this.pauseButton.hidden = true;
      this.startButton.hidden = false;
      this.stopButton.hidden = true;
      (<HTMLInputElement>document.getElementById("pomodoro-clock-task")).disabled = false;
      (<HTMLDivElement>document.getElementById("circuloPomodoro")).style.removeProperty('animation');
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
    this.workSessionDuration = workDurationInput ? parseInt(workDurationInput) * 60 : 5;//25 * 60;
    this.currentTimeLeftInSession = this.workSessionDuration;
    this.breakSessionDuration = breakDurationInput ? parseInt(breakDurationInput) * 60 : 5;//5 * 60;

    this.clockLate = (this.workSessionDuration / 60) * 20
    let timeWithDelay = this.workSessionDuration + this.clockLate;
    (<HTMLDivElement>document.getElementById("circuloPomodoro")).style.animation = " offsettozero " + timeWithDelay + "s linear forwards infinite";

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
        //clearInterval(this.clockTimer);
        this.currentTimeLeftInSession = this.workSessionDuration;
        this.displaySessionLog('Break');
        this.typeSession = 'Work';
        this.stopButton.click();
        //(<HTMLDivElement>document.getElementById("circuloPomodoro")).style.animation = " offsettozero " + timeWithDelay + "s linear reverse infinite";
        //(<HTMLDivElement>document.getElementById("circuloPomodoro")).style.animationPlayState = "running";
        //(<HTMLInputElement>document.getElementById("pomodoro-clock-task")).disabled = false;

      } else {
        (<HTMLDivElement>document.getElementById("circuloPomodoro")).style.animationPlayState = "paused";
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

    let elapsedTime = Math.floor(this.workSessionDuration / 60)

    if (this.typeSession === 'Break') {
      sessionLabel = 'Break'
      elapsedTime = Math.floor(this.breakSessionDuration / 60)
    }


    //elapsedTime = elapsedTime > 0 ? elapsedTime : '< 1';

    const text = document.createTextNode(
      `${sessionLabel} : ${elapsedTime} min`
    )

    li.appendChild(text);
    sessionsList.appendChild(li);
  }


  stopClock() {

    //this.displaySessionLog(this.typeSession);
    this.typeSession = "Work";
    this.clockWasPaused = false;

    //this.ajustaTempo();
    this.timeSpentInCurrentSession = 0;
    // 1) reset the timer we set
    clearInterval(this.clockTimer);
    // 2) update our variable to know that the timer is stopped
    this.isClockRunning = false;
    // reset the time left in the session to its original state
    this.currentTimeLeftInSession = this.workSessionDuration - this.clockLate;
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
