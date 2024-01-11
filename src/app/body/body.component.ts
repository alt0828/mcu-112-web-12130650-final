import { ArticleTabComponent } from './../article-tab/article-tab.component';
import { Component } from '@angular/core';

import { TagSidebarComponent } from '../tag-sidebar/tag-sidebar.component';
import { ArticleComponent } from '../article/article.component';
import { ArticlePreviewComponent } from '../article-preview/article-preview.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [TagSidebarComponent, ArticlePreviewComponent, ArticleTabComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {}
