import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NewArticlePageComponent } from './new-article-page/new-article-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Home' },
  { path: 'Home', component: HomePageComponent },
  { path: 'New Article', component: NewArticlePageComponent },
  { path: 'Sign in', component: SignInPageComponent },
  { path: 'Sign up', component: SignUpPageComponent },
  { path: 'conduit', component: HomePageComponent },
];
