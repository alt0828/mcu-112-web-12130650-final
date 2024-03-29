import { Article } from './../article';
import { Component, HostBinding, Input } from '@angular/core';
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component';
import { DatePipe } from '@angular/common';
import { TagListComponent } from '../tag-list/tag-list.component';
import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [DatePipe, TagListComponent, FavoriteButtonComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent {
  @Input({ required: true })
  article!: Article;

  @HostBinding('class') class = 'article';
}
