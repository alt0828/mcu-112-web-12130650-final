import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, NavBarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
