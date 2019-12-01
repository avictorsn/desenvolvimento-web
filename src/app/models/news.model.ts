import { Article } from './article.model';

export class News {
    status: string;
    totalResults: number;
    articles: [Article];
}
