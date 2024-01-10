import { ArticleTabComponent } from './../article-tab/article-tab.component';
import { Component } from '@angular/core';
import { ArticleListComponent } from '../article-list/article-list.component';
import { TagSidebarComponent } from '../tag-sidebar/tag-sidebar.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [TagSidebarComponent, ArticleListComponent, ArticleTabComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {}
