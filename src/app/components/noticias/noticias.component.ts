import { Component, OnInit } from '@angular/core';

import { GoogleNewsApiService } from './../../services/googlenewsAPI/google-news-api.service';

import { News } from 'src/app/models/news.model';
import { Article } from './../../models/article.model';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  news: News;
  articles: Article[] = [];
  wasLoaded = false;

  constructor(private newsService: GoogleNewsApiService) { }

  ngOnInit() {
    this.populateNewsList();
  }

  populateNewsList() {
    this.newsService.getGeneralNews().subscribe((data) => {
      this.news = data;
      this.articles = this.news.articles;
      this.wasLoaded = true;

    });

  }

}
