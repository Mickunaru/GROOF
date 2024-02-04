import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ResultsPageComponent } from './pages/results-page/results-page.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'results', component: ResultsPageComponent },
  { path: '**', redirectTo: 'home' }
];
