import { Component, OnInit } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faStopCircle } from '@fortawesome/free-solid-svg-icons';
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { PomodoroService } from 'src/app/services/pomodoro/pomodoro.service';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css']
})



export class PomodoroComponent implements OnInit {

  isClockRunning = false;
  clockWasPaused = false;
  listaAtividadesVazia = true;
  showConfig = true;
  workSessionDuration: number = 60 * 25; // em segundos 25min
  currentTimeLeftInSession: number = this.workSessionDuration;
  clockLate: number = (this.workSessionDuration / 60) * 9;
  breakSessionDuration = 300;
  timeSpentInCurrentSession = 0;
  typeSession = 'Work';
  clockTimer: any;
  listaMetasConcluidas: string[] = [];
  listaAtividades = [];

  pomodoroTimer: HTMLElement;
  startButton: HTMLElement;
  pauseButton: HTMLElement;
  stopButton: HTMLElement;
  configButton: HTMLElement;
  salvarEstudosButton: HTMLElement;
  metasComCheck: HTMLCollectionOf<Element>;
  resumoAtividades: HTMLCollectionOf<Element>;
  faCog = faCog;
  faPlayCircle = faPlayCircle;
  faStopCircle = faStopCircle;
  faPauseCircle = faPauseCircle;


  constructor(private pomodoroService: PomodoroService) { }

  ngOnInit() {

    // Adicionamos uma classe `checked`, sempre que um elemento da lista for clicado
    const listaMetas = document.getElementById('listaMetasDoDia') as HTMLDivElement;

    listaMetas.addEventListener('click', (ev: MouseEvent) => {
      const element = ev.target as HTMLElement;
      if (element.tagName === 'LI') {
        element.classList.toggle('checked');
      }
    }, false);

    // pq a div não ta carregando???
    this.pomodoroTimer = document.querySelector('#pomodoro-timer');
    this.startButton = document.querySelector('#pomodoro-start');
    this.pauseButton = document.querySelector('#pomodoro-pause');
    this.stopButton = document.querySelector('#pomodoro-stop');
    this.configButton = document.querySelector('#showConfig');
    this.salvarEstudosButton = document.querySelector('#salvarEstudos');


    this.salvarEstudosButton.addEventListener('click', () => {
      // Limpar pomodoro
      this.stopButton.click();
      // Salvar metas com check, e limpar

      this.retornaElementosDasListas().then(() =>
        this.limpaDadosDoComponentePomodoro()
      );


      // Após salvar apagar a lista

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.metasComCheck.length; i++) {
        let meta = this.metasComCheck[i].textContent;
        meta = meta.substring(0, meta.length - 1);

        this.listaMetasConcluidas.push(meta);
      }


      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.resumoAtividades.length; i++) {
        let atividade = this.resumoAtividades[i].textContent;
        // tslint:disable-next-line:radix
        const duracao = atividade.slice(atividade.indexOf(':') + 2, atividade.indexOf('m') - 1);
        atividade = atividade.slice(0, atividade.indexOf(':') - 1);
        const atividadeJSON = {
          title: atividade,
          duration: duracao
        };
        this.listaAtividades.push(atividadeJSON);
      }
      console.log(this.listaAtividades);


      this.pomodoroService.setPomodoro(this.listaMetasConcluidas, this.listaAtividades);

      this.listaAtividadesVazia = true;

    });

    this.configButton.addEventListener('click', () => {

      if (this.showConfig) {
        // tslint:disable-next-line:max-line-length
        (document.querySelector('.inputParaPomodoro') as HTMLDivElement).setAttribute('style', 'visibility: visible; opacity: 1; transition-delay: 0s;');
        this.showConfig = false;
      } else {
        this.showConfig = true;
        // tslint:disable-next-line:max-line-length
        (document.querySelector('.inputParaPomodoro') as HTMLDivElement).setAttribute('style', 'visibility: hidden; opacity: 0; transition: visibility 0s linear 0.33s, opacity 0.33s linear;');
      }


    });

    this.startButton.addEventListener('click', () => {
      this.pauseButton.hidden = false;
      this.startButton.hidden = true;
      this.stopButton.hidden = false;
      (document.getElementById('circuloPomodoro') as HTMLDivElement).style.animationPlayState = 'running';
      (document.getElementById('pomodoro-clock-task') as HTMLInputElement).disabled = true;
      this.toggleClock(false);
    });

    this.pauseButton.addEventListener('click', () => {
      this.pauseButton.hidden = true;
      this.startButton.hidden = false;
      (document.getElementById('circuloPomodoro') as HTMLDivElement).style.animationPlayState = 'paused';
      this.toggleClock(false);
    });

    this.stopButton.addEventListener('click', () => {
      this.pauseButton.hidden = true;
      this.startButton.hidden = false;
      this.stopButton.hidden = true;
      (document.getElementById('pomodoro-clock-task') as HTMLInputElement).disabled = false;
      (document.getElementById('circuloPomodoro') as HTMLDivElement).style.removeProperty('animation');
      this.toggleClock(true);
    });



  }

  limpaDadosDoComponentePomodoro() {
    document.getElementById('listaMetasDoDia').innerHTML = '';
    // Salvar título e tempo, para os elementos do resumo e limpar
    document.getElementById('pomodoro-sessions').innerHTML = '';
  }

  retornaElementosDasListas(): Promise<any> {
    this.metasComCheck = document.getElementsByClassName('checked');
    this.resumoAtividades = document.getElementsByClassName('resumoAtividade');
    // tslint:disable-next-line:only-arrow-functions
    return Promise.resolve(function(v) { });
  }


  /**
   * Limitação: angular não consegue pegar css, qndo elemento é adicionado
   * dinamicamente
   */
  addElementoListaMeta() {

    /**
     * Criamos um elemento para a lista, adicionamos as classes necessárias
     */


    const li = document.createElement('li');
    // Angular tem algumas complicações, como pegar valor do input
    const valorInput = (document.getElementById('inputMetasDoDia') as HTMLInputElement).value;
    const textoInput = document.createTextNode(valorInput);
    li.appendChild(textoInput);
    li.classList.add('list-group-item');
    li.classList.add('py-0');

    (document.getElementById('btnAddElementoLista') as HTMLInputElement).value = '';

    /**
     * Adicionamos botão 'span' para apagar elemento da lista de metas
     */
    const span = document.createElement('span');
    const txt = document.createTextNode('\u00D7');
    span.classList.add('close');
    // tslint:disable-next-line:only-arrow-functions
    span.onclick = function() {
      const liClosest = span.closest('li');
      const ulClosest = liClosest.closest('ul');
      ulClosest.removeChild(liClosest);
    };

    span.appendChild(txt);
    li.appendChild(span);

    if (!(valorInput === '')) {
      document.getElementById('listaMetasDoDia').appendChild(li);
    }

  }

  toggleClock(reset: boolean) {

    // var clockTimer: any;

    if (reset) {
      // para relogio
      this.stopClock();
    } else {
      if (this.isClockRunning) {
        // pausa
        clearInterval(this.clockTimer);
        this.isClockRunning = false;
        this.clockWasPaused = true;
      } else {
        // inicia
        this.isClockRunning = true;


        // Pega input, se não tiver, vai o básico, e se não estava pausado
        if (!this.clockWasPaused) {
          this.clockWasPaused = false;
          this.ajustaTempo();
        }

        this.displayCurrentTimeLeftInSession();
        this.clockTimer = setInterval(() => {
          // decrease time left / increase time spent
          // this.currentTimeLeftInSession = this.currentTimeLeftInSession - 1;
          this.stepDown();
          this.displayCurrentTimeLeftInSession();
        }, 1000);

      }
    }
  }

  ajustaTempo() {
    const workDurationInput = (document.querySelector('#input-work-duration') as HTMLInputElement).value;
    const breakDurationInput = (document.querySelector('#input-break-duration') as HTMLInputElement).value;
    // tslint:disable-next-line:radix
    this.workSessionDuration = workDurationInput ? parseInt(workDurationInput) * 60 : 25 * 60;
    this.currentTimeLeftInSession = this.workSessionDuration;
    // tslint:disable-next-line:radix
    this.breakSessionDuration = breakDurationInput ? parseInt(breakDurationInput) * 60 : 5 * 60;

    this.clockLate = (this.workSessionDuration / 60) * 20;
    const timeWithDelay = this.workSessionDuration + this.clockLate;
    // tslint:disable-next-line:max-line-length
    (document.getElementById('circuloPomodoro') as HTMLDivElement).style.animation = ' offsettozero ' + timeWithDelay + 's linear forwards infinite';

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
        // clearInterval(this.clockTimer);
        this.currentTimeLeftInSession = this.workSessionDuration;
        this.displaySessionLog('Break');
        this.typeSession = 'Work';
        this.stopButton.click();
        // tslint:disable-next-line:max-line-length
        // (<HTMLDivElement>document.getElementById("circuloPomodoro")).style.animation = " offsettozero " + timeWithDelay + "s linear reverse infinite";
        // (<HTMLDivElement>document.getElementById("circuloPomodoro")).style.animationPlayState = "running";
        // (<HTMLInputElement>document.getElementById("pomodoro-clock-task")).disabled = false;

      } else {
        (document.getElementById('circuloPomodoro') as HTMLDivElement).style.animationPlayState = 'paused';
        this.currentTimeLeftInSession = this.breakSessionDuration;
        this.displaySessionLog('Work');
        this.typeSession = 'Break';

        const sessionsList = document.querySelector('#pomodoro-sessions');
        if (sessionsList.hasChildNodes()) {
          this.listaAtividadesVazia = false;
        }
        // (<HTMLInputElement>document.getElementById("pomodoro-clock-task")).disabled = true;

      }

    }
    this.displayCurrentTimeLeftInSession();
  }

  displaySessionLog(type: string) {

    const currentTaskLabel = (document.querySelector('#pomodoro-clock-task') as HTMLInputElement).value;

    const sessionsList = document.querySelector('#pomodoro-sessions');
    // append li to it
    const li = document.createElement('li');
    li.classList.add('resumoAtividade');
    let sessionLabel = currentTaskLabel ? currentTaskLabel : 'Work';

    let elapsedTime = Math.floor(this.workSessionDuration / 60);

    if (this.typeSession === 'Break') {
      sessionLabel = 'Break';
      elapsedTime = Math.floor(this.breakSessionDuration / 60);
    }


    // elapsedTime = elapsedTime > 0 ? elapsedTime : '< 1';

    const text = document.createTextNode(
      `${sessionLabel} : ${elapsedTime} min`
    );

    li.appendChild(text);
    sessionsList.appendChild(li);
  }


  stopClock() {

    // this.displaySessionLog(this.typeSession);
    this.typeSession = 'Work';
    this.clockWasPaused = false;

    // this.ajustaTempo();
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
    const hours = Math.floor(secondsLeft / 3600);

    // add leading zeroes if it's less than 10
    function addLeadingZeroes(time) {
      return time < 10 ? `0${time}` : time;
    }

    if (hours > 0) { result += `${hours}:`; }

    result += `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`;
    this.pomodoroTimer.innerHTML = result.toString();

  }


}
