import { User } from '../../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // urlBaseAPI = 'https://jsonplaceholder.typicode.com/users';
  urlBaseAPI = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {  }

  getUsers() {
    return this.http.get<User[]>(this.urlBaseAPI).pipe(map(res => res));
  }
}
