import { Routes } from '@angular/router';
import { FigmaHeroComponent } from './figma-hero/figma-hero.component';
import { TeamColorsComponent } from './team-colors/team-colors.component';

export const routes: Routes = [
  { path: '', component: FigmaHeroComponent },
  { path: 'team-colors', component: TeamColorsComponent }
];
