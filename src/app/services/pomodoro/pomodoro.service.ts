import { Injectable } from '@angular/core';
import { Pomodoro } from '../../models/pomodoro.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PomodoroService {

  urlPomodoro = 'http://localhost:3000/api/pomodoros';

  constructor(private http: HttpClient) { }

  setPomodoro(checklist, sessions) {
    const date = new Date();
    const pom: Pomodoro = { sessions,  checklist, date };
    return this.http.post(this.urlPomodoro, pom).toPromise().then( () =>{
      console.log(" Enviou! ") 
    }).catch( (e) => {
      console.log(e) 
    });
  }
}
