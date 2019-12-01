import { News } from './../../models/news.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoogleNewsApiService {

  apiKey = 'ad5f8ef06b204bf19bc5173e9f85dff2';
  urlBase = 'http://newsapi.org/v2/top-headlines?country=br';
  keyQuery = '&apiKey=' + this.apiKey;
  pageSize = 'pageSize=10';

  constructor(private http: HttpClient) { }

  getGeneralNews() {
    return this.http.get<News>(this.urlBase + this.keyQuery).pipe(map(res => res));
  }

  getNewsByTag(tag) {
    const queryTag = 'q="' + tag + '"';
    return this.http.get(this.urlBase + '&' + queryTag + '&' + this.pageSize + this.keyQuery).pipe(map(res => res));
  }
}
