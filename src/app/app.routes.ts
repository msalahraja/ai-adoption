import { Routes } from '@angular/router';
import { FigmaHeroComponent } from './figma-hero/figma-hero.component';
import { TeamColorsComponent } from './team-colors/team-colors.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: FigmaHeroComponent },
  { path: 'team-colors', component: TeamColorsComponent },
  { path: 'login', component: LoginComponent }
];
