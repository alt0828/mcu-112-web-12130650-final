import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [CommonModule, BodyComponent],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.css',
})
export class SignInPageComponent {}
