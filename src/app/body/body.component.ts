import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagListComponent } from '../tag-list/tag-list.component';
import { ArticleListComponent } from '../article-list/article-list.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [TagListComponent, ArticleListComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {}
