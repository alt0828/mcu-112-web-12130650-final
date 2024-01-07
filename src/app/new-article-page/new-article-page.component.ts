import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-new-article-page',
  standalone: true,
  imports: [CommonModule, BodyComponent],
  templateUrl: './new-article-page.component.html',
  styleUrl: './new-article-page.component.css',
})
export class NewArticlePageComponent {}
