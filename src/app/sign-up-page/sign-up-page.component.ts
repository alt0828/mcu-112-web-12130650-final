import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [CommonModule, BodyComponent],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css',
})
export class SignUpPageComponent {}
