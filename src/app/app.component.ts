import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FigmaHeroComponent } from './figma-hero/figma-hero.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FigmaHeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ai-adoption';
}
