import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';

import { GoogleNewsApiService } from './../../services/googlenewsAPI/google-news-api.service';

import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
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
  faSearch = faSearch;
  query: string;
  queryEntered = false;

  constructor(private newsService: GoogleNewsApiService, private newsSnackBar: MatSnackBar) { }

  ngOnInit() {
    this.populateNewsList();
  }

  populateNewsList() {
    this.newsService.getGeneralNews().subscribe((data) => {
      this.news = data;
      this.articles = this.news.articles;
      this.wasLoaded = true;
      this.query = '';

    });
  }

  validateQuery() {
    if (this.query.length === 0) {
      this.newsSnackBar.open('Digite algo na barra de busca', 'Fechar', {
        duration: 2800
      });
    } else {
      this.searchFor();
    }
  }

  searchFor() {
    //  Chamada para o método da APIservice que busca por queries;
  }

}
